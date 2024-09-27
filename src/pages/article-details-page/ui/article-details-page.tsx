import { memo, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ArticleDetails } from 'entities/article'
import { CommentList } from 'entities/comment'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/article-details-comments-slice'

import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
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
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const errors = useSelector(getArticleCommentsErrors)

  useEffect(() => {
    dispatch(fetchCommenteById(id))
  }, [])

  if (!id) {
    return (
      <div className={styles.articleDetailsPage}>{t('Статья не найдена')}</div>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div
        className={classNames(styles['article-details-page'], {}, [className])}
      >
        <ArticleDetails id={id} />
        <Text
          className={styles['article-details-page-comments-title']}
          title="Комментарии"
        />
        <CommentList comments={comments} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
