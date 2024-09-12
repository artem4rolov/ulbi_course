import { Dispatch, FC, SetStateAction, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import { Modal } from 'shared'
import { Text } from 'shared/ui/text'
import { Loader } from 'shared/ui/loader'

import { LoginFormAsync } from '../login-form/login-form.async'

import styles from './login-modal.module.scss'

interface LoginModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, setIsOpen } = props
  const { t } = useTranslation('translation')

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      className={styles['login-form']}
    >
      <Text title={t('authForm')} />
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
