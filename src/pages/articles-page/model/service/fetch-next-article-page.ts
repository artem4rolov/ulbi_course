import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from '../selectors/articles-page.selectors'
import { articlePageActions } from '../slice/article-page.slice'
import { fetchArticleList } from './fetch-article-list'

export const fetchNextArticlePage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPageSlice/fetchNextArticlePage', async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi
  const hasMore = getArticlesPageHasMore(getState())
  const page = getArticlesPageNumber(getState())
  const isLoading = getArticlesPageIsLoading(getState())

  if (hasMore && !isLoading) {
    dispatch(articlePageActions.setPage(page + 1))
    dispatch(fetchArticleList({}))
  }
})
