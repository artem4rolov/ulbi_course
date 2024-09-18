import { AppLink, AppLinkTheme } from 'shared'
import { SidebarItemType } from '../../model/items'

import styles from './sidebar-item.module.scss'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getAuthData } from 'entities/user'

type ISidebarItemProps = {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
  const isAuth = useSelector(getAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink theme={AppLinkTheme.PRIMARY_INVERTED} to={item.route}>
      <item.Icon className={styles.icon} />
      {!collapsed && item.text}
    </AppLink>
  )
})
