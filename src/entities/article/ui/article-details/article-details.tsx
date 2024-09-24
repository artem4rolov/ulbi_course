import { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { fetchArticleById } from '../../model/services/fetch-article-by-id'
import { articleDetailsReducer } from '../../model/slice/article-details.slice'
import {
  DynamicModuleLoader,
  useAppDispatch,
  Text,
  TextAlign,
  Skeleton,
  Avatar,
  TextSize,
  IconComponent,
} from 'shared'
import {
  getArticleDetailsData,
  getArticleDetailsErrors,
  getArticleDetailsLoading,
} from '../../model/selectors/get-article-details-data'

import classes from './article-details.module.scss'
import EyeIcon from 'shared/assets/icons/eye.svg'
import CalendarIcon from 'shared/assets/icons/calendar.svg'
import { ArticleBlockType, ArticleBlock } from '../../model/types/article.types'
import { ArticleCodeBlockComponent } from '../article-code-block-component/article-code-block-component'
import { ArticleImageBlockComponent } from '../article-image-block-component/article-image-block-component'
import { ArticleTextBlockComponent } from '../article-text-block-component/article-text-block-component'

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

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return (
            <ArticleCodeBlockComponent
              key={block.id}
              className={classes['article-details-block']}
              block={block}
            />
          )
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageBlockComponent
              key={block.id}
              className={classes['article-details-block']}
              block={block}
            />
          )
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextBlockComponent
              key={block.id}
              className={classes['article-details-block']}
              block={block}
            />
          )

        default:
          return null
      }
    }, [])

    useEffect(() => {
      dispatch(fetchArticleById(id))
    }, [dispatch, id])

    let content

    if (isLoading) {
      content = (
        <>
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
          <Skeleton className={classes.skeleton} width={'100%'} height={200} />
          <Skeleton className={classes.skeleton} width={'100%'} height={200} />
          <Skeleton className={classes.skeleton} width={'100%'} height={200} />
          <Skeleton className={classes.skeleton} width={'100%'} height={200} />
        </>
      )
    } else if (error) {
      content = <Text text={error} align={TextAlign.CENTER} variant="error" />
    } else {
      content = (
        <>
          <div className={classes['article-details-avatar']}>
            <Avatar size={200} src={data?.img} />
          </div>

          <Text title={data?.title} text={data?.subtitle} size={TextSize.L} />
          <div className={classes['article-details-info']}>
            <IconComponent Svg={EyeIcon} />
            <Text text={String(data?.views)} />
          </div>
          <div className={classes['article-details-info']}>
            <IconComponent Svg={CalendarIcon} />
            <Text text={data?.createdAt} />
          </div>
          {data?.blocks.map((block) => renderBlock(block))}
        </>
      )
    }

    return (
      <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        {content}
      </DynamicModuleLoader>
    )
  },
)
