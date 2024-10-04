import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthData } from '../model/types/auth.types'
import { User, userActions } from 'entities/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared'
import { ThunkConfig } from 'app/providers/store-provider'

export const loginByUserName = createAsyncThunk<
  User,
  AuthData,
  ThunkConfig<string>
>('authByUserName/loginByUserName', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.post<User>('/login', authData)

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
    dispatch(userActions.setAuthData(response.data))
    // extra.navigate?.('/about')

    return response.data
  } catch (err) {
    console.log(err)
    return rejectWithValue('custom error')
  }
})
