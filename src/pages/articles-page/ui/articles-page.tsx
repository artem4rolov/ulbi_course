import { memo, useCallback, useEffect } from 'react'
import styles from './articles-page.module.scss'
import { useTranslation } from 'react-i18next'
import {
  ArticleList,
  ArticleSchema,
  ArticleView,
  ArticleViewSelector,
} from 'entities/article'
import { DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared'
import {
  articlePageActions,
  articlesPageReducer,
  getArticles,
} from '../model/slice/article-page.slice'
import { fetchArticleList } from '../model/service/fetch-article-list'
import { useSelector } from 'react-redux'
import {
  getArticlesPageErrors,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articles-page.selectors'

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

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [])

  useEffect(() => {
    dispatch(fetchArticleList())
    dispatch(articlePageActions.initState())
  }, [dispatch])

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={styles.articlesPage}>
        <ArticleViewSelector
          view={view ?? ArticleView.BIG}
          onViewClick={onChangeView}
        />
        <ArticleList isLoading={isLoading} articles={articles} view={view} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
