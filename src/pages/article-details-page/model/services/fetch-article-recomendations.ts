import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleSchema } from 'entities/article'

export const fetchArticleRecomendations = createAsyncThunk<
  ArticleSchema[],
  void,
  ThunkConfig<string>
>(
  'articlesRecomendationsSLice/fetchArticleRecomendations',
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
      const response = await extra.api.get<ArticleSchema[]>(`/articles`, {
        params: {
          _limit: 4,
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
