import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleSchema } from 'entities/article'

export const fetchArticleList = createAsyncThunk<
  ArticleSchema[],
  void,
  ThunkConfig<string>
>('fetchCommenteById/fetchArticleList', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<ArticleSchema[]>(`/articles`, {
      params: {
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
})
