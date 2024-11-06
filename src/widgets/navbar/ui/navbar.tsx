import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonTheme } from 'shared/ui/button/button.types'
import { classNames } from 'shared/helpers'

import { AppLink, AppLinkTheme, Avatar, Button, Dropdown } from 'shared/ui'

import styles from './navbar.module.scss'
import { LoginModal } from 'features'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, userActions } from 'entities/user'
import { RouterPaths } from 'shared'
import { useNavigate } from 'react-router-dom'
interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { t } = useTranslation('translation')

  const authData = useSelector(getAuthData)
  const [isOpen, setIsOpen] = useState(false)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (!authData) {
    return (
      <header className={classNames(styles.navbar, {}, [className])}>
        <div>logo</div>
        <div className={classNames(styles['navbar-links'])}>
          <Button theme={ButtonTheme.LINK} onClick={() => setIsOpen(true)}>
            {t('signInButton')}
          </Button>
        </div>
        <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </header>
    )
  }

  return (
    <header className={classNames(styles.navbar, {}, [className])}>
      <div className={styles['navbar-logo-container']}>
        <div>logo</div>
        <AppLink
          theme={AppLinkTheme.PRIMARY_INVERTED}
          to={RouterPaths.article_create}
        >
          Создать статью
        </AppLink>
      </div>
      <div className={classNames(styles['navbar-links'])}>
        <Dropdown
          className={styles['navbar-dropdown']}
          items={[
            {
              content: t('Выйти'),
              onClick: onLogout,
            },
            {
              onClick: () => navigate(RouterPaths.profile + authData.id),
              content: 'Профиль',
            },
          ]}
          trigger={<Avatar src={authData.avatar} size={40} />}
          direction="bottom left"
        />
      </div>
    </header>
  )
})
