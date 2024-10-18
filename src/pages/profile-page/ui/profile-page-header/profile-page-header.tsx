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
import { HStack, VStack } from 'shared/ui/stack'

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
    <HStack justify="between" className={styles['profile-page-header']}>
      <Text text={t('Профиль')} />
      {canEditUserData && (
        <HStack justify="end">
          {readOnly ? (
            <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onEdit}>
              {t('Редактировать')}
            </Button>
          ) : (
            <HStack gap="4" justify="end">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onEditCancel}>
                {t('Отменить')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE_INVERTED} onClick={onSave}>
                {t('Сохранить')}
              </Button>
            </HStack>
          )}
        </HStack>
      )}
    </HStack>
  )
}
