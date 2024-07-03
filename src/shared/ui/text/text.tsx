import { FC } from 'react'
import styles from './text.module.scss'
import { classNames } from 'shared/helpers'

interface ITextProps {
  title?: string
  text?: string
  className?: string
  variant?: 'error'
}

export const Text: FC<ITextProps> = ({ title, text, className, variant }) => {
  return (
    <div
      className={classNames(styles['text-wrapper'], {}, [
        className,
        styles[variant],
      ])}
    >
      {title && <p className={styles['text-title']}>{title}</p>}
      {text && <p className={styles['text-text']}>{text}</p>}
    </div>
  )
}
