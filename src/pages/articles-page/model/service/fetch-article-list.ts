import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleSchema } from 'entities/article'
import { getArticlesPageLimit } from '../selectors/articles-page.selectors'

interface FetchArticleListProps {
  page?: number
}

export const fetchArticleList = createAsyncThunk<
  ArticleSchema[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlesPageSlice/fetchArticleList', async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const { page = 1 } = args

  const limit = getArticlesPageLimit(getState())

  try {
    const response = await extra.api.get<ArticleSchema[]>(`/articles`, {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
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
