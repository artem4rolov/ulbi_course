import { StateSchema } from 'app'

export const getArticleRecomendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recomendations?.isLoading
export const getArticleRecomendationsErrors = (state: StateSchema) =>
  state.articleDetailsPage?.recomendations?.error
