import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user-slice.types'

const initialState: UserSchema = {
    authData: undefined,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
