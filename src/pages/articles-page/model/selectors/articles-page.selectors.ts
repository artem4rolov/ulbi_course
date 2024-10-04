import { StoreSchema } from 'app'
import { ArticleView } from 'entities/article'

export const getArticlesPageIsLoading = (state: StoreSchema) =>
  state.articlesPage?.isLoading
export const getArticlesPageErrors = (state: StoreSchema) =>
  state.articlesPage?.error
export const getArticlesPageView = (state: StoreSchema) =>
  state.articlesPage?.view || ArticleView.SMALL
export const getArticlesPageNumber = (state: StoreSchema) =>
  state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StoreSchema) =>
  state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StoreSchema) =>
  state.articlesPage?.hasMore
export const getArticlesPageInited = (state: StoreSchema) =>
  state.articlesPage?._inited
