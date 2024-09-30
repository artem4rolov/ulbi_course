import { createAsyncThunk } from '@reduxjs/toolkit'
import { Comment } from 'entities/comment'
import { getAuthData } from 'entities/user'
import { ThunkConfig } from 'app/providers/store-provider'
// import { getAddFormText } from '../selectors/add-comment-form.selector'
import { getArticleDetailsData } from 'entities/article'
import { fetchCommenteById } from './fetchCommentsById'
// import { addCommentFormActions } from '../slice/add-comment-form.slice'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetailsCommentsSlice/addCommentForArticle',
  async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi

    const userData = getAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text,
      })

      if (!response.data) {
        throw new Error()
      }

      // очищаем инпут после отправки комментария
      // dispatch(addCommentFormActions.setText(''))
      // перезапрашиваем статью, чтобы обновить данные коммментариев
      dispatch(fetchCommenteById(article.id))

      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue('custom error')
    }
  },
)
