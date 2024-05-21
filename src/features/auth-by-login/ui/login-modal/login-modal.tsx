import { Dispatch, FC, SetStateAction } from 'react'
import { Modal } from 'shared'
import { LoginForm } from '../login-form/login-form'

interface LoginModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, setIsOpen } = props

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <LoginForm value="" />
    </Modal>
  )
}
