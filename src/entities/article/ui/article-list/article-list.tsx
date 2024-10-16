import { LegacyRef } from 'react'
import {
  AutoSizer,
  List,
  ListRowProps,
  WindowScroller,
} from 'react-virtualized'
import { classNames, PAGE_COMPONENT_ID, Text } from 'shared'
import { ArticleSchema, ArticleView } from '../../model/types/article.types'
import { ArticleListItem } from '../article-list-item/article-list-item'
import { ArticleListItemSkeleton } from '../article-list-item/article-list-item-skeleton'
import classes from './article-list.module.scss'

interface ArticleListProps {
  className?: string
  articles: ArticleSchema[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 12 : 6)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton
        className={classes['article-list-item']}
        view={view}
        key={index}
      />
    ))
}

export const ArticleList = ({
  articles = [],
  className,
  isLoading = false,
  view = ArticleView.SMALL,
}: ArticleListProps) => {
  // const renderArticle = (article: ArticleSchema) => (
  //   <ArticleListItem
  //     key={article.id}
  //     article={article}
  //     view={view}
  //     className={classes['article-list-item']}
  //   />
  // )

  if (!articles.length && !isLoading) {
    return (
      <div
        className={classNames(classes['article-list'], {}, [
          className,
          classes[view],
        ])}
      >
        <Text text="Ничего не найдено" />
      </div>
    )
  }

  const isBig = view === ArticleView.BIG
  const itemsPerRow = isBig ? 1 : 3
  // определяем, сколько будет строк (если отображение плиткой)
  const rowCount = isBig ? articles.length : articles.length / itemsPerRow

  const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = []
    // считаем, с какого индекса нам нужно отображать элементы
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          key={articles[i].id}
          article={articles[i]}
          view={view}
          className={classes['article-list-item']}
        />,
      )
    }

    return (
      <div key={key} style={style} className={classes['article-list-row']}>
        {items}
      </div>
    )
  }

  return (
    <WindowScroller
      onScroll={() => console.log('scroll')}
      scrollElement={document.getElementById(PAGE_COMPONENT_ID) as Element}
    >
      {({
        width,
        height,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          ref={
            registerChild as unknown as LegacyRef<HTMLDivElement> | undefined
          }
          className={classNames(classes['article-list'], {}, [
            className,
            classes[view],
          ])}
        >
          <List
            height={height ?? 600}
            rowCount={rowCount}
            rowHeight={isBig ? 500 : 330}
            rowRenderer={rowRenderer}
            width={width ? width - 80 : 700}
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
            autoHeight
          />
          {/* {articles.length > 0 ? articles.map(renderArticle) : null} */}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
}
