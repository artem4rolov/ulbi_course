import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ButtonTheme } from 'shared/ui/button/button.types'
import { classNames } from 'shared/helpers'

import { Button } from 'shared/ui'

import styles from './navbar.module.scss'
import { LoginModal } from 'features'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthData, userActions } from 'entities/user'
interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props
  const dispatch = useDispatch()
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
      <div>logo</div>
      <div className={classNames(styles['navbar-links'])}>
        <Button theme={ButtonTheme.LINK} onClick={onLogout}>
          {t('logoutButton')}
        </Button>
      </div>
    </header>
  )
})
