import { classNames } from 'shared'
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
  const renderArticle = (article: ArticleSchema) => (
    <ArticleListItem
      key={article.id}
      article={article}
      view={view}
      className={classes['article-list-item']}
    />
  )

  if (!isLoading) {
    return (
      <div
        className={classNames(classes['article-list'], {}, [
          className,
          classes[view],
        ])}
      >
        {getSkeletons(view)}
      </div>
    )
  }

  return (
    <div
      className={classNames(classes['article-list'], {}, [
        className,
        classes[view],
      ])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  )
}
