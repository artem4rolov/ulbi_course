import { memo, useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleDetails, ArticleList } from 'entities/article'
import { CommentList } from 'entities/comment'
import { getArticleComments } from '../model/slices/article-details-comments-slice'

import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  Text,
  TextSize,
  useAppDispatch,
} from 'shared'

import styles from './article-details-page.module.scss'
import { useSelector } from 'react-redux'
import {
  getArticleCommentsErrors,
  getArticleCommentsIsLoading,
} from '../model/selectors/comments-selectors'
import { fetchCommenteById } from '../model/services/fetchCommentsById'
import { AddCommentForm } from 'features/add-comment-form'
import { addCommentForArticle } from './../model/services/add-comment-for-article'
import { PageComponent } from 'widgets'
import { getArticleRecomendations } from '../model/slices/article-details-page-recomendations-slice'
import {
  getArticleRecomendationsErrors,
  getArticleRecomendationsIsLoading,
} from '../model/selectors/recomendations-selector'
import { fetchArticleRecomendations } from '../model/services/fetch-article-recomendations'
import { articleDetailsPageReducer } from '../model/slices'
import ArticleDetailsPageHeader from './article-details-page-header/article-details-page-header'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  // articleDetailsComments: articleDetailsCommentsReducer,
  // articleRecomendations: articleDetailsRecomendationsReducer,
  // используем комбинированный редюсер
  articleDetailsPage: articleDetailsPageReducer,
} as ReducersList

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const { className } = props

  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const recomendations = useSelector(getArticleRecomendations.selectAll)
  const recomendationsIsLoading = useSelector(getArticleRecomendationsIsLoading)
  const recomendationsErrors = useSelector(getArticleRecomendationsErrors)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const errors = useSelector(getArticleCommentsErrors)

  useEffect(() => {
    dispatch(fetchCommenteById(id))
    dispatch(fetchArticleRecomendations())
  }, [])

  const onSendComment = useCallback(
    (text: string) => {
      if (text) {
        dispatch(addCommentForArticle(text))
      }
    },
    [dispatch],
  )

  if (!id) {
    return (
      <PageComponent className={styles.articleDetailsPage}>
        {t('Статья не найдена')}
      </PageComponent>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <PageComponent
        className={classNames(styles['article-details-page'], {}, [className])}
      >
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text
          className={styles['article-details-page-comments-title']}
          size={TextSize.L}
          title="Рекомендуем"
        />
        <ArticleList
          articles={recomendations}
          isLoading={recomendationsIsLoading}
          className={styles['article-details-page-recomendations']}
        />
        <Text
          className={styles['article-details-page-comments-title']}
          size={TextSize.L}
          title="Комментарии"
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </PageComponent>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
