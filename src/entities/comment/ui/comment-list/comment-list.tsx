import { Comment } from '../../model/types/comment.types'
import { classNames, Text } from 'shared'
import { CommentCard } from '../comment-card/comment-card'
import classes from './comment-list.module.scss'

interface ICommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = (props: ICommentListProps) => {
  const { className, comments, isLoading } = props

  return (
    <div className={classNames(classes['comment-list'], {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            className={classes['comment-card']}
            comment={comment}
            key={comment.id}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={'Комментарии отсутствуют'} />
      )}
    </div>
  )
}
