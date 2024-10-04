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
    ids: [],
    entities: {},
    error: undefined,
    isLoading: false,
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_VIEW_KEY,
      ) as ArticleView

      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
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
          // при асинхронной подгрузке, добавляем данные в конец уже имеющихся, а не перезаписываем весь массив
          // чтобы не спамить запросами при работе с IntersectionObserver
          articlesAdapter.addMany(state, action.payload)
          state.hasMore = action.payload.length > 0 ? true : false
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
