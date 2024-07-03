import { type FC } from 'react'
import { classNames } from 'shared/helpers'
import { type ButtonProps, ButtonTheme, ButtonSize } from './button.types'
import styles from './button.module.scss'

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    theme = ButtonTheme.SOLID,
    size = ButtonSize.BUTTON_SIZE_M,
    children,
    onClick,
    testId,
    disabled = false,
  } = props

  const additional = [className, styles[theme], styles[size]]

  return (
    <button
      data-testid={testId}
      className={classNames(styles.button, { disabled: disabled }, additional)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
