import { Dispatch, FC, SetStateAction } from 'react'
import { Modal } from 'shared'
import { LoginForm } from '../login-form/login-form'
import { Text } from 'shared/ui/text'
import { useTranslation } from 'react-i18next'

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
      <LoginForm />
    </Modal>
  )
}
