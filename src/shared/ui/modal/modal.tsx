import { FC } from 'react'
import { createPortal } from 'react-dom'

import { ModalProps } from './modal.types'
import { classNames } from 'shared/helpers'

import styles from './modal.module.scss'

export const Modal: FC<ModalProps> = ({
  className,
  isOpen = false,
  setIsOpen,
  children,
}) => {
  if (!isOpen) {
    return null
  }

  return createPortal(
    <div
      onClick={() => setIsOpen(false)}
      className={classNames(styles['modal-container'], {}, [
        className,
        isOpen && styles['modal-container-open'],
      ])}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles['modal-content']}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
