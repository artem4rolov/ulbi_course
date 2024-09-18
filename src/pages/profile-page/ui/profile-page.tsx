import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/profile'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared'
import { ProfilePageHeader } from './profile-page-header/profile-page-header'
import { Currency } from 'entities/currency'
import { Country } from 'entities/country'

const reducers: ReducersList = {
  profile: profileReducer,
} as ReducersList

const ProfilePage = () => {
  const { t } = useTranslation('main-page')
  const dispatch = useAppDispatch()

  const profileForm = useSelector(getProfileForm)
  const profileError = useSelector(getProfileError)
  const isProfileLoading = useSelector(getProfileIsLoading)
  const readOnly = useSelector(getProfileReadOnly)

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ firstname: value || '' }))
    },
    [dispatch],
  )
  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || '' }))
    },
    [dispatch],
  )
  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value || '' }))
    },
    [dispatch],
  )
  const onChangeAge = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value) || 0 }))
    },
    [dispatch],
  )
  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value || '' }))
    },
    [dispatch],
  )
  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || '' }))
    },
    [dispatch],
  )
  const onChangeCountry = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateProfile({ country: value }))
    },
    [dispatch],
  )
  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }))
    },
    [dispatch],
  )

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      <div>
        <ProfileCard
          data={profileForm}
          isLoading={isProfileLoading}
          error={profileError}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUserName={onChangeUserName}
          onChangeAvatar={onChangeAvatar}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          readonly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
