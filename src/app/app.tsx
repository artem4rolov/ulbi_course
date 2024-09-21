import { useEffect } from 'react'
import { useTheme } from 'shared/hooks'
import { classNames } from 'shared/helpers'
import { Navbar, Sidebar } from 'widgets'
import { Router } from './providers'

import './styles/index.scss'

import '../shared/config/i18n/i18n'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/user'

export const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  const isUserInited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div
      className={classNames('app', { selectable: true, hovered: false }, [
        theme,
        'top-2',
        'left-5',
      ])}
    >
      <Navbar />
      <div className={'app-content'}>
        <Sidebar />
        {isUserInited && <Router />}
      </div>
    </div>
  )
}
