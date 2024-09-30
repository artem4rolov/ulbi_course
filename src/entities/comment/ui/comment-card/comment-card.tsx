import {
  AppLink,
  AppLinkTheme,
  Avatar,
  classNames,
  RouterPaths,
  Skeleton,
  Text,
} from 'shared'
import { Comment } from '../../model/types/comment.types'
import classes from './comment-card.module.scss'

interface ICommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = (props: ICommentCardProps) => {
  const { comment, className, isLoading = false } = props

  if (isLoading) {
    return (
      <div
        className={classNames(classes['comment-card-wrapper'], {}, [className])}
      >
        <div className={classes['comment-card-user']}>
          <Skeleton width={30} height={30} border={'50%'} />
          <Skeleton
            width={100}
            height={16}
            className={classes['comment-card-user-name']}
          />
        </div>
        <Skeleton
          width={'100%'}
          height={50}
          className={classes['comment-card-text']}
        />
      </div>
    )
  }

  console.log(comment)

  return (
    <div
      className={classNames(classes['comment-card-wrapper'], {}, [className])}
    >
      <div className={classes['comment-card-user']}>
        <AppLink
          theme={AppLinkTheme.USTYLED}
          to={`${RouterPaths.profile}${comment.user.id}`}
        >
          {comment.user.avatar && (
            <Avatar
              alt="comment user avatar"
              src={comment.user.avatar}
              size={30}
            />
          )}
          <Text
            className={classes['comment-card-user-name']}
            title={comment.user.username}
          />
        </AppLink>
      </div>
      <Text className={classes['comment-card-text']} text={comment.text} />
    </div>
  )
}
