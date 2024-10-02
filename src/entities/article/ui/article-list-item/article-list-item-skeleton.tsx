import { ArticleView } from '../../model/types/article.types'
import { CardComponent, classNames, Skeleton } from 'shared'
import classes from './article-list-item.module.scss'

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = ({
  className,
  view,
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div
        className={classNames(classes['article-list-item'], {}, [
          className,
          classes[view],
        ])}
      >
        <CardComponent>
          <div className={classes['article-list-item-header']}>
            <div className={classes['article-list-item-header-user-block']}>
              <Skeleton width={30} height={30} border={'50%'} />
              <Skeleton width={150} height={16} />
            </div>
            <Skeleton width={150} height={16} />
          </div>
          <Skeleton
            width={250}
            height={24}
            className={classes['article-list-item-title']}
          />
          <Skeleton
            height={200}
            className={classes['article-list-item-image']}
          />
          <div className={classes['article-list-item-footer']}>
            <Skeleton width={200} height={16} />
            <div className={classes['article-list-item-footer-views']}>
              <Skeleton width={200} height={16} />
            </div>
          </div>
        </CardComponent>
      </div>
    )
  }

  return (
    <div
      className={classNames(classes['article-list-item'], {}, [
        className,
        classes[view],
      ])}
    >
      <CardComponent>
        <div className={classes['article-list-item-image-wrapper']}>
          <Skeleton
            className={classes['article-list-item-image']}
            width={200}
            height={200}
          />
        </div>
        <div className={classes['article-list-item-info-wrapper']}>
          <div className={classes['article-list-item-info-wrapper-top-block']}>
            <Skeleton
              className={
                classes['article-list-item-info-wrapper-top-block-types']
              }
              width={130}
              height={16}
            />
            <div
              className={
                classes['article-list-item-info-wrapper-top-block-views']
              }
            >
              <Skeleton width={150} height={16} />
            </div>
          </div>
          <Skeleton
            width={150}
            height={16}
            className={classes['article-list-item-info-title']}
          />
        </div>
      </CardComponent>
    </div>
  )
}
