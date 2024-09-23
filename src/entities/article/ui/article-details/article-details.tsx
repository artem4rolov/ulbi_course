import { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { fetchArticleById } from '../../model/services/fetch-article-by-id'
import { articleDetailsReducer } from '../../model/slice/article-details.slice'
import {
  classNames,
  DynamicModuleLoader,
  useAppDispatch,
  Text,
  TextAlign,
  Skeleton,
} from 'shared'
import {
  getArticleDetailsData,
  getArticleDetailsErrors,
  getArticleDetailsLoading,
} from '../../model/selectors/get-article-details-data'

import classes from './article-details.module.scss'

interface IArticleDetailsProps {
  className?: string
  id: string
}

const initialReducers = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(
  ({ id, className }: IArticleDetailsProps) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation('article-details')
    const data = useSelector(getArticleDetailsData)
    const isLoading = useSelector(getArticleDetailsLoading)
    const error = useSelector(getArticleDetailsErrors)

    useEffect(() => {
      dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (!isLoading) {
      content = (
        <div>
          <Skeleton
            className={classes.avatar}
            width={200}
            height={200}
            border={'50%'}
          />
          <Skeleton className={classes.title} width={300} height={32} />
          <Skeleton className={classes.skeleton} width={600} height={24} />
          <Skeleton className={classes.skeleton} width={'100%'} height={200} />
          <Skeleton className={classes.skeleton} width={'100%'} height={200} />
        </div>
      )
    } else if (error) {
      content = <Text text={error} align={TextAlign.CENTER} variant="error" />
    } else {
      content = (
        <div
          className={classNames(classes['article-details'], {}, [className])}
        >
          ArticleDetails
        </div>
      )
    }

    return (
      <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        {content}
      </DynamicModuleLoader>
    )
  },
)
