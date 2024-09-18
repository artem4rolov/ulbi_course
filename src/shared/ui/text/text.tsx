import { FC } from 'react'
import styles from './text.module.scss'
import { classNames } from 'shared/helpers'

interface ITextProps {
  title?: string
  text?: string
  className?: string
  variant?: 'error'
  align?: TextAlign
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export const Text: FC<ITextProps> = ({
  title,
  text,
  className,
  variant,
  align = TextAlign.LEFT,
}) => {
  const mods = {
    [styles[variant!]]: true,
    [styles[align]]: true,
  }

  return (
    <div
      className={classNames(styles['text-wrapper'], mods, [
        className,
        variant && styles[variant],
      ])}
    >
      {title && <p className={styles['text-title']}>{title}</p>}
      {text && <p className={styles['text-text']}>{text}</p>}
    </div>
  )
}
