import { StoreSchema } from 'app'

export const getAddFormText = (state: StoreSchema) =>
  state?.addCommentForm?.text ?? ''
export const getAddFormError = (state: StoreSchema) =>
  state?.addCommentForm?.error ?? ''
