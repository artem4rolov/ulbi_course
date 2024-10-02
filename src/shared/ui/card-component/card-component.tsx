import { HTMLAttributes } from 'react'
import { classNames } from 'shared/helpers'

import classes from './card-component.module.scss'

interface CardComponentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const CardComponent = ({
  children,
  className,
  ...otherProps
}: CardComponentProps) => {
  return (
    <div
      className={classNames(classes['card-component'], {}, [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
