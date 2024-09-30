import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { Profile, ValidateProfileError } from '../type/profile'
import { getProfileForm } from '../selectors/get-profile-form'
import { validateProfile } from '../../helpers/validate-profile'

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const formData = getProfileForm(getState())

  if (formData) {
    const errors = validateProfile(formData)

    if (errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>(
        '/profile/' + formData.id,
        formData,
      )

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (err) {
      console.log(err)
      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
  throw new Error()
})
