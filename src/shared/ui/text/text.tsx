import { FC } from 'react'
import styles from './text.module.scss'
import { classNames } from 'shared/helpers'

interface ITextProps {
  title?: string
  text?: string
  className?: string
  variant?: 'error'
  align?: TextAlign
  size?: TextSize
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

export const Text: FC<ITextProps> = ({
  title,
  text,
  className,
  variant,
  align = TextAlign.LEFT,
  size = TextSize.M,
}) => {
  const mods = {
    [styles[variant!]]: true,
    [styles[align]]: true,
    [styles[size]]: true,
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
