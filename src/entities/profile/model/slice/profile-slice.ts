import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../type/profile'
import { fetchProfileData } from '../services/fetch-profile-data'
import { updateProfileData } from '../services/update-profile-data'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.form = state.data
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.error = ''
        },
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(
        updateProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false
          state.data = action.payload
          state.form = action.payload
          state.readonly = true
          state.error = ''
        },
      )
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
