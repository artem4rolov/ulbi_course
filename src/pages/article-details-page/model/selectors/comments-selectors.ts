import { StateSchema } from 'app'

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.articleDetailsComments?.isLoading
export const getArticleCommentsErrors = (state: StateSchema) =>
  state.articleDetailsComments?.error
