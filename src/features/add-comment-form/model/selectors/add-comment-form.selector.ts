import { StateSchema } from 'app'

export const getAddFormText = (state: StateSchema) =>
  state?.addCommentForm?.text ?? ''
export const getAddFormError = (state: StateSchema) =>
  state?.addCommentForm?.error ?? ''
