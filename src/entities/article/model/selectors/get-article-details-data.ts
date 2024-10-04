import { StateSchema } from 'app'

export const getArticleDetailsData = (state: StateSchema) =>
  state.articleDetails?.data
export const getArticleDetailsLoading = (state: StateSchema) =>
  state.articleDetails?.isLoading
export const getArticleDetailsErrors = (state: StateSchema) =>
  state.articleDetails?.error
