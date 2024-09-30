import { ButtonTheme } from 'shared/ui/button/button.types'
import styles from './profile-page-header.module.scss'
import { Button, Text, useAppDispatch } from 'shared'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/profile'
import { useCallback } from 'react'
import { getAuthData } from 'entities/user'

interface ProfilePageHeaderProps {}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const authData = useSelector(getAuthData)
  const profileData = useSelector(getProfileData)
  const readOnly = useSelector(getProfileReadOnly)

  const canEditUserData = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [])

  const onEditCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [])

  return (
    <div className={styles['profile-page-header']}>
      <Text text={t('Профиль')} />
      {canEditUserData && (
        <div className={styles['profile-page-header-btn-wrapper']}>
          {readOnly ? (
            <Button
              className={styles['profile-page-header-edit-button']}
              theme={ButtonTheme.OUTLINE_INVERTED}
              onClick={onEdit}
            >
              {t('Редактировать')}
            </Button>
          ) : (
            <div className={styles['profile-page-header-buttons']}>
              <Button
                className={styles['profile-page-header-edit-button']}
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onEditCancel}
              >
                {t('Отменить')}
              </Button>
              <Button
                className={styles['profile-page-header-edit-button']}
                theme={ButtonTheme.OUTLINE_INVERTED}
                onClick={onSave}
              >
                {t('Сохранить')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
