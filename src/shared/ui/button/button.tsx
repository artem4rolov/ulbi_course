import { type FC } from 'react'
import { classNames } from 'shared/helpers'
import { type ButtonProps, ButtonTheme } from './button.types'
import styles from './button.module.scss'

export const Button: FC<ButtonProps> = (props) => {
    const { className, theme = ButtonTheme.SOLID, children, onClick } = props

    return (
        <button
            className={classNames(styles.button, {}, [className, styles[theme]])}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
