import { memo, type FC } from 'react'
import { classNames } from 'shared/helpers'
import { type ButtonProps, ButtonTheme, ButtonSize } from './button.types'
import styles from './button.module.scss'

// здесь мемо юзается по причине того, что children в кнопке в 90% случаях - это строка (примитив), а не объект
// по-хорошему, 80% проекта можно всегда покрыть memo, за исключением компонентов в которых с высокой долей вероятности часто будет меняться children,
// и этот children - не примитив, а другие компоненты с древовидной структурой (JSX)
export const Button = memo((props: ButtonProps) => {
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
})
