import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app'
import { ArticleSchema } from 'entities/article'
import { fetchArticleRecomendations } from '../services/fetch-article-recomendations'
import { ArticleDetailsRecomendationsSchema } from '../types/article-details-page-recomendations.types'

const recomendationsAdapter = createEntityAdapter<ArticleSchema>({
  // Assume IDs are stored in a field other than `comment.id`
  selectId: (recomendationArticle: ArticleSchema) => recomendationArticle.id,
})

export const getArticleRecomendations =
  recomendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recomendations ||
      recomendationsAdapter.getInitialState(),
  )

const articleDetailsPageRecomendationsSlice = createSlice({
  name: 'articleDetailPageRecomendationssSlice',
  initialState:
    recomendationsAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
      ids: [],
      entities: {},
      error: undefined,
      isLoading: false,
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecomendations.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(
        fetchArticleRecomendations.fulfilled,
        (state, action: PayloadAction<ArticleSchema[]>) => {
          state.isLoading = false
          recomendationsAdapter.setAll(state, action.payload)
        },
      )
      .addCase(fetchArticleRecomendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})

export const { reducer: articleDetailsRecomendationsReducer } =
  articleDetailsPageRecomendationsSlice
