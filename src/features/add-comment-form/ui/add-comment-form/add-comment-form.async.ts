import { FC, lazy } from 'react'
import { AddCommentFormProps } from './add-comment-form'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => import('./add-comment-form'),
)
