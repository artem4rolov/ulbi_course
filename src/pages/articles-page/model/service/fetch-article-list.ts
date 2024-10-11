import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleSchema, ArticleType } from 'entities/article'
import { addQueryParams } from 'shared'
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../selectors/articles-page.selectors'

interface FetchArticleListProps {
  replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
  ArticleSchema[],
  FetchArticleListProps,
  ThunkConfig<string>
>('articlesPageSlice/fetchArticleList', async (args, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const limit = getArticlesPageLimit(getState())
  const order = getArticlesPageOrder(getState())
  const sort = getArticlesPageSort(getState())
  const search = getArticlesPageSearch(getState())
  const page = getArticlesPageNumber(getState())
  const tabType = getArticlesPageType(getState())

  try {
    addQueryParams({ sort, order, search })
    const response = await extra.api.get<ArticleSchema[]>(`/articles`, {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
        type: tabType === ArticleType.ALL ? undefined : tabType,
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
