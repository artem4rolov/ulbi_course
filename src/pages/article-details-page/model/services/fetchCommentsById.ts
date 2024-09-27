import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { Comment } from 'entities/comment'

export const fetchCommenteById = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsCommentsSlice/fetchCommenteById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) {
      //   throw new Error('fetch error')
      return rejectWithValue('article ID is undefined')
    }

    try {
      const response = await extra.api.get<Comment[]>(`/comments`, {
        params: {
          articleId,
          _expand: 'user',
        },
      })

      if (!response.data) {
        throw new Error('fetch error')
      }

      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue('custom error')
    }
  },
)
