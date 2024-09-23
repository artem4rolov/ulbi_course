import { StoreSchema } from 'app'

export const getArticleDetailsData = (state: StoreSchema) =>
  state.articleDetails?.data
export const getArticleDetailsLoading = (state: StoreSchema) =>
  state.articleDetails?.isLoading
export const getArticleDetailsErrors = (state: StoreSchema) =>
  state.articleDetails?.error
