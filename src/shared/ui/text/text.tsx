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
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
  // XL = 'size_xl',
}

export type HeaderTag = 'h1' | 'h2' | 'h3'

// улучшаем семантику
const mapSizeHeaderTag: Record<TextSize, HeaderTag> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
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

  const HeaderTag = mapSizeHeaderTag[size]

  return (
    <div
      className={classNames(styles['text-wrapper'], mods, [
        className,
        variant && styles[variant],
      ])}
    >
      {title && <HeaderTag className={styles['text-title']}>{title}</HeaderTag>}
      {text && <p className={styles['text-text']}>{text}</p>}
    </div>
  )
}
