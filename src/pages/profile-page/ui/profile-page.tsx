import { profileReducer } from 'entities/profile'
import { Counter } from '../../../entities/counter/ui/counter'
import { useTranslation } from 'react-i18next'
import { DynamicModuleLoader, Input, ReducersList } from 'shared'

const reducers: ReducersList = {
  profile: profileReducer,
} as ReducersList

const ProfilePage = () => {
  const { t } = useTranslation('main-page')

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>Profile page</div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
