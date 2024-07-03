import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { User, UserSchema } from '../types/user-slice.types'
import { LOCAL_STORAGE_USER_KEY } from 'shared'

const initialState: UserSchema = {
  authData: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state: UserSchema) => {
      state.authData = undefined
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    },
    setAuthData: (state: UserSchema, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
      if (user) {
        state.authData = JSON.parse(user)
      }
    },
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
