import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UISaveScrollSchema } from '../types/ui-save-scroll.types'

const initialState: UISaveScrollSchema = {
  scroll: {},
}

export const uiSaveScrollSlice = createSlice({
  name: 'uiSaveScrollSlice',
  initialState,
  reducers: {
    setScroll: (
      state: UISaveScrollSchema,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      const { path, position } = action.payload
      state.scroll[path] = position
    },
  },
})

export const { actions: uiSaveScrollActions, reducer: uiSaveScrollReducer } =
  uiSaveScrollSlice
