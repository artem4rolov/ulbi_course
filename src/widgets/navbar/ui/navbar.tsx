import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/helpers'
import { AppLink, AppLinkTheme } from 'shared/ui'
import styles from './navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props
    const { t } = useTranslation('translation')

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div>logo</div>
            <div className={classNames(styles['navbar-links'])}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    {t('navLinkAboutUsPage')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {t('navLinkMainPage')}
                </AppLink>
            </div>
        </div>
    )
}
