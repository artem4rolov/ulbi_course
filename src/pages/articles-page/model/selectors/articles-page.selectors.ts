import { StoreSchema } from 'app'

export const getArticlesPageIsLoading = (state: StoreSchema) =>
  state.articlesPage?.isLoading
export const getArticlesPageErrors = (state: StoreSchema) =>
  state.articlesPage?.error
export const getArticlesPageView = (state: StoreSchema) =>
  state.articlesPage?.view
