import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { StoreSchema } from 'app'
import { Comment } from 'entities/comment'
import { fetchCommenteById } from '../services/fetchCommentsById'
import { ArticleDetailsCommentSchema } from '../types/article-details-comment-schema.types'

const commentsAdapter = createEntityAdapter<Comment>({
  // Assume IDs are stored in a field other than `comment.id`
  selectId: (comment: Comment) => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StoreSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    ids: [],
    entities: {},
    error: undefined,
    isLoading: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommenteById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(
        fetchCommenteById.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
        },
      )
      .addCase(fetchCommenteById.rejected, (state, action) => {
        state.isLoading = false
        state.error = String(action.payload)
      })
  },
})

export const { reducer: articleDetailsCommentsReducer } =
  articleDetailsCommentsSlice
