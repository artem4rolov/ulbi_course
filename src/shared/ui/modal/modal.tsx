import { FC } from 'react'
import { ModalProps } from './modal.types'

import styles from './modal.module.scss'
import { classNames } from 'shared/helpers'

export const Modal: FC<ModalProps> = ({
  className,
  isOpen = false,
  setIsOpen,
  children,
}) => {
  return (
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
    </div>
  )
}
