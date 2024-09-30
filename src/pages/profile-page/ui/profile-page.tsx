import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadOnly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/profile'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList, Text, useAppDispatch } from 'shared'
import { ProfilePageHeader } from './profile-page-header/profile-page-header'
import { Currency } from 'entities/currency'
import { Country } from 'entities/country'
import { useParams } from 'react-router-dom'

const reducers: ReducersList = {
  profile: profileReducer,
} as ReducersList

const ProfilePage = () => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const profileForm = useSelector(getProfileForm)
  const profileError = useSelector(getProfileError)
  const isProfileLoading = useSelector(getProfileIsLoading)
  const readOnly = useSelector(getProfileReadOnly)
  const profileValidateErrors = useSelector(getProfileValidateErrors)
  const { id } = useParams<{ id: string }>()

  const validateErrorsTraslates = {
    [ValidateProfileError.INCORRECT_AGE]: `${t('incorrect_age')}`,
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect_country'),
    [ValidateProfileError.INCORRECT_USER_DATA]: `${t('incorrectUserData')}`,
    [ValidateProfileError.NO_DATA]: t('no_user_data'),
    [ValidateProfileError.SERVER_ERROR]: t('server_error'),
  }

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
    // для среды сторибука и тестирования этот запрос не нужен
    if (__PROJECT__ === 'frontend') {
      if (id) {
        dispatch(fetchProfileData(id))
      }
    }
  }, [dispatch, id])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfilePageHeader />
      {profileValidateErrors.length ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {profileValidateErrors.map((error) => (
            <Text
              key={error}
              variant="error"
              text={validateErrorsTraslates[error]}
            />
          ))}
        </div>
      ) : null}
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
