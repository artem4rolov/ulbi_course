import { useTransition } from 'react'
import { useSelector } from 'react-redux'

import { getProfileData } from 'entities/profile/model/selectors/get-profile-data'
import { getProfileError } from 'entities/profile/model/selectors/get-profile-error'
import { getProfileIsLoading } from 'entities/profile/model/selectors/get-profile-is-loading'
import { Button, classNames, Input } from 'shared'
import { Text } from 'shared/ui/text'
import { ButtonTheme } from 'shared/ui/button/button.types'

import styles from './profile-card.module.scss'

interface ProfileCard {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCard) => {
  const { t } = useTransition('profile')
  const profileData = useSelector(getProfileData)
  const profileError = useSelector(getProfileError)
  const isProfileLoading = useSelector(getProfileIsLoading)

  return (
    <div className={classNames(styles['profile-data'], {}, [className])}>
      <div className={styles['profile-data-header']}>
        <Text text={t('Профиль')} />
        <Button
          className={styles['profile-data-edit-button']}
          theme={ButtonTheme.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles['profile-data-content']}>
        <Input
          value={profileData?.firstname}
          placeholder={t('Ваше имя')}
          className={styles['profile-data-input']}
        />
        <Input
          value={profileData?.lastname}
          placeholder={t('Ваша фамилия')}
          className={styles['profile-data-input']}
        />
      </div>
    </div>
  )
}
