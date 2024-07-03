import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AuthData } from '../model/types/auth.types'
import { User, userActions } from 'entities/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared'

export const loginByUserName = createAsyncThunk<
  User,
  AuthData,
  { rejectValue: string }
>('authByUserName/loginByUserName', async (authData, thunkAPI) => {
  try {
    const response = await axios.post<User>(
      'http://localhost:8000/login',
      authData,
    )

    if (!response.data) {
      throw new Error()
    }

    localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(response.data))
    thunkAPI.dispatch(userActions.setAuthData(response.data))

    return response.data
  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue('custom error')
  }
})
