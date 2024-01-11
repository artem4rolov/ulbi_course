import { type FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { classNames } from 'shared/helpers'

import styles from './app-link.module.scss'
import { type AppLinkProps, AppLinkTheme } from './app-link.types'

export const AppLink: FC<AppLinkProps> = (props) => {
    const { to, className, theme = AppLinkTheme.PRIMARY, children } = props

    return (
        <Link
            to={to}
            className={classNames(styles['app-link'], {}, [className, styles[theme]])}
        >
            {children}
        </Link>
    )
}
