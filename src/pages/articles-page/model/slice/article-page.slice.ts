import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app'
import {
  ArticleSchema,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from 'entities/article'
import { LOCAL_STORAGE_ARTICLE_VIEW_KEY } from 'shared'
import { SortOrder } from 'shared/types'
import { fetchArticleList } from '../service/fetch-article-list'
import { ArticlesPageSchema } from '../types/article-page.types'

const articlesAdapter = createEntityAdapter<ArticleSchema>({
  // Assume IDs are stored in a field other than `article.id`
  selectId: (article: ArticleSchema) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
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

    // pagination
    page: 1,
    hasMore: true,
    limit: 9,

    // filters
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'desc',
    type: ArticleType.ALL,

    // initializing
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLE_VIEW_KEY, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    initState: (state) => {
      const view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLE_VIEW_KEY,
      ) as ArticleView

      state.view = view
      state.limit = view === ArticleView.BIG ? 4 : 9
      state._inited = true
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleList.pending, (state, action) => {
        state.isLoading = true
        state.error = undefined

        if (action.meta.arg.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticleList.fulfilled, (state, action) => {
        state.isLoading = false
        // state.hasMore = action.payload.length > 0 ? true : false
        state.hasMore = action.payload.length >= state.limit

        if (action.meta.arg.replace) {
          // если работаем с фильтрами (сортировка/поиск/фильтрация) - меняем весь ранее загруженный стест
          articlesAdapter.setAll(state, action.payload)
        } else {
          // при асинхронной подгрузке, добавляем данные в конец уже имеющихся, а не перезаписываем весь массив
          // чтобы не спамить запросами при работе с IntersectionObserver
          articlesAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticleList.rejected, (state, action) => {
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})

export const { reducer: articlesPageReducer, actions: articlePageActions } =
  articlesPageSlice
