import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthSchema } from '../types/auth.types'
import { loginByUserName } from 'features/auth-by-username/services/auth-service'

const initialState: AuthSchema = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
}

export const authByUserNameSlice = createSlice({
  name: 'authByUserName',
  initialState,
  reducers: {
    setUserName: (state: AuthSchema, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setUserPassword: (state: AuthSchema, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(loginByUserName.fulfilled, (state) => {
        state.isLoading = false
        state.error = ''
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: authByUserNameActions } = authByUserNameSlice
export const { reducer: authByUserNameReducer } = authByUserNameSlice
