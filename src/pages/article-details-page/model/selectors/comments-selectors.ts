import { StateSchema } from 'app'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.isLoading
export const getArticleCommentsErrors = (state: StateSchema) =>
  state.articleDetailsPage?.comments?.error
