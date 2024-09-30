import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddCommentFormSchema } from '../types/add-comment-form.types'

const initialState: AddCommentFormSchema = {
  error: '',
  text: '',
}

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(loginByUserName.pending, (state) => {
  //         state.isLoading = true
  //         state.error = ''
  //       })
  //       .addCase(loginByUserName.fulfilled, (state) => {
  //         state.isLoading = false
  //         state.error = ''
  //       })
  //       .addCase(loginByUserName.rejected, (state, action) => {
  //         state.isLoading = false
  //         state.error = action.payload ?? ''
  //       })
  //   },
})

export const { actions: addCommentFormActions } = addCommentFormSlice
export const { reducer: addCommentFormReducer } = addCommentFormSlice
