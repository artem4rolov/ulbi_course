import { memo, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleDetails } from 'entities/article'
import { CommentList } from 'entities/comment'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/article-details-comments-slice'

import {
  Button,
  classNames,
  DynamicModuleLoader,
  PageComponent,
  ReducersList,
  RouterPaths,
  Text,
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
import { ButtonTheme } from 'shared/ui/button/button.types'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
} as ReducersList

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles')
  const { id } = useParams<{ id: string }>()
  const { className } = props

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const errors = useSelector(getArticleCommentsErrors)

  useEffect(() => {
    dispatch(fetchCommenteById(id))
  }, [])

  const onSendComment = useCallback(
    (text: string) => {
      if (text) {
        dispatch(addCommentForArticle(text))
      }
    },
    [dispatch],
  )

  const onBackToListArticle = useCallback(() => {
    navigate(`${RouterPaths.articles}`)
  }, [navigate])

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
        <Button
          theme={ButtonTheme.OUTLINE_INVERTED}
          onClick={onBackToListArticle}
        >
          Назад к списку статей
        </Button>
        <ArticleDetails id={id} />
        <Text
          className={styles['article-details-page-comments-title']}
          title="Комментарии"
        />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList comments={comments} isLoading={isLoading} />
      </PageComponent>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
