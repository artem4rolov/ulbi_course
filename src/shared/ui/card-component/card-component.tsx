import { HTMLAttributes } from 'react'
import { classNames } from 'shared/helpers'

import classes from './card-component.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardComponentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: CardTheme
}

export const CardComponent = ({
  children,
  theme = CardTheme.NORMAL,
  className,
  ...otherProps
}: CardComponentProps) => {
  return (
    <div
      className={classNames(classes['card-component'], {}, [
        className,
        classes[theme],
      ])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
