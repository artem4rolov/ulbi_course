import { memo, useCallback, useEffect } from 'react'
import styles from './articles-page.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/article'
import { DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared'
import {
  articlePageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slice/article-page.slice'
import { useSelector } from 'react-redux'
import {
  getArticlesPageErrors,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articles-page.selectors'
import { fetchNextArticlePage } from '../model/service/fetch-next-article-page'
import { initArticlesPage } from '../model/service/init-articles-page'
import { PageComponent } from 'widgets'

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
  // const hasMore = useSelector(getArticlesPageHasMore)
  // const inited = useSelector(getArticlesPageInited)
  // const page = useSelector(getArticlesPageNumber)
  const dispatch = useAppDispatch()

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [])

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage())
  }, [dispatch])

  useEffect(() => {
    dispatch(initArticlesPage())
  }, [])

  if (errors) {
    return <>{errors}</>
  }

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <PageComponent
        className={styles.articlesPage}
        onScrollEnd={onLoadNextPart}
      >
        <ArticleViewSelector
          view={view ?? ArticleView.BIG}
          onViewClick={onChangeView}
        />
        <ArticleList isLoading={isLoading} articles={articles} view={view} />
      </PageComponent>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
