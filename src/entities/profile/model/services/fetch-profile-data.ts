import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { Profile } from '../type/profile'

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>(
  'profile/fetchProfileData',
  //@ts-ignore
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi
    try {
      const response = await extra.api.get<Profile>('/profile')

      if (!response.data) {
        return new Error('fetch error')
      }

      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue('custom error')
    }
  },
)
