import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import {
  getArticlesPageInited,
  getArticlesPageNumber,
} from '../selectors/articles-page.selectors'
import { articlePageActions } from '../slice/article-page.slice'
import { fetchArticleList } from './fetch-article-list'

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPageSlice/initArticlesPage', async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi

  const inited = getArticlesPageInited(getState())

  if (!inited) {
    dispatch(articlePageActions.initState())
    dispatch(fetchArticleList({ page: 1 }))
  }
})
