import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { Profile } from '../type/profile'
import { getProfileForm } from '../selectors/get-profile-form'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const formData = getProfileForm(getState())
  try {
    const response = await extra.api.put<Profile>('/profile', formData)

    return response.data
  } catch (err) {
    console.log(err)
    return rejectWithValue('custom error')
  }
})
