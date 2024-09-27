import { StoreSchema } from 'app'

export const getArticleCommentsIsLoading = (state: StoreSchema) =>
  state.articleDetailsComments?.isLoading
export const getArticleCommentsErrors = (state: StoreSchema) =>
  state.articleDetailsComments?.error
