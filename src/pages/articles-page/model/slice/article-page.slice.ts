import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { ArticleSchema, ArticleView } from 'entities/article'
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from 'shared'
import { fetchArticleList } from '../service/fetch-article-list'
import { ArticlesPageSchema } from '../types/article-page.types'

const articlesAdapter = createEntityAdapter<ArticleSchema>({
  // Assume IDs are stored in a field other than `article.id`
  selectId: (article: ArticleSchema) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StoreSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    // ids: ['1', '2'],
    ids: [],
    entities: {
      //   '1': { id: '1', text: 'test', user: { id: '1', username: 'test user' } },
      //   '2': {
      //     id: '2',
      //     text: 'test 2',
      //     user: { id: '2', username: 'test user 2' },
      //   },
    },
    error: undefined,
    isLoading: false,
    view: ArticleView.SMALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_VIEW_KEY,
      ) as ArticleView
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(
        fetchArticleList.fulfilled,
        (state, action: PayloadAction<ArticleSchema[]>) => {
          state.isLoading = false
          articlesAdapter.setAll(state, action.payload)
        },
      )
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})

export const { reducer: articlesPageReducer, actions: articlePageActions } =
  articlesPageSlice
