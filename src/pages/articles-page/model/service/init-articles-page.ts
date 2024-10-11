import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleSortField } from 'entities/article'
import { SortOrder } from 'shared/types'
import { getArticlesPageInited } from '../selectors/articles-page.selectors'
import { articlePageActions } from '../slice/article-page.slice'
import { fetchArticleList } from './fetch-article-list'

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('articlesPageSlice/initArticlesPage', async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi

  const inited = getArticlesPageInited(getState())

  if (!inited) {
    // забираем фильтры из url
    const orderFromUrl = searchParams.get('order') as SortOrder
    const sortFromUrl = searchParams.get('sort') as ArticleSortField
    const searchFromUrl = searchParams.get('search')

    if (orderFromUrl) {
      dispatch(articlePageActions.setOrder(orderFromUrl))
    }
    if (sortFromUrl) {
      dispatch(articlePageActions.setSort(sortFromUrl))
    }
    if (searchFromUrl) {
      dispatch(articlePageActions.setSearch(searchFromUrl))
    }

    dispatch(articlePageActions.initState())
    dispatch(fetchArticleList({}))
  }
})
