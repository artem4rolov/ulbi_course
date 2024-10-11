import { memo, useCallback, useEffect } from 'react'
import styles from './articles-page.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article'
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
} from 'shared'
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slice/article-page.slice'
import { useSelector } from 'react-redux'
import {
  getArticlesPageErrors,
  getArticlesPageIsLoading,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/articles-page.selectors'
import { fetchNextArticlePage } from '../../model/service/fetch-next-article-page'
import { initArticlesPage } from '../../model/service/init-articles-page'
import { PageComponent } from 'widgets'
import ArticlesPageFilters from '../articles-page-filters/articles-page-filters'

import classes from './articles-page.module.scss'
import { useSearchParams } from 'react-router-dom'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
} as ReducersList

const ArticlesPage = (props: ArticlesPageProps) => {
  const { t } = useTranslation('articles')
  const { className } = props
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const errors = useSelector(getArticlesPageErrors)
  const view = useSelector(getArticlesPageView)

  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffect(() => {
    dispatch(initArticlesPage(searchParams))
  }, [])

  if (errors) {
    return <>{errors}</>
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <PageComponent
        className={classNames(styles['articles-page'], {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters />
        <ArticleList
          isLoading={isLoading}
          articles={articles}
          view={view}
          className={classes['articles-page-list']}
        />
      </PageComponent>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
