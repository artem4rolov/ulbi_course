import { FC, lazy } from 'react'
import { AddCommentFormProps } from './add-comment-form'

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import('./add-comment-form')), 1500),
    ),
)
