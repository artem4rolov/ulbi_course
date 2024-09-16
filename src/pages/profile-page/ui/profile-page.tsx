import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, ReducersList, useAppDispatch } from 'shared'

const reducers: ReducersList = {
  profile: profileReducer,
} as ReducersList

const ProfilePage = () => {
  const { t } = useTranslation('main-page')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
