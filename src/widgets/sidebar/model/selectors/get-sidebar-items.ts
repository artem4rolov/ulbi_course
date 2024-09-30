import { createSelector } from '@reduxjs/toolkit'
import { getAuthData } from 'entities/user'
import { RouterPaths } from 'shared/config'
import { SidebarItemType } from '../types/sidebar.types'

import {
  AboutUsIcon,
  ArticleIcon,
  GoHomeIcon,
  ProfileIcon,
} from 'shared/assets'

export const getSidebarItems = createSelector(getAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    { route: RouterPaths.main, text: 'Главная', Icon: GoHomeIcon },
    { route: RouterPaths.about, text: 'О нас', Icon: AboutUsIcon },
  ]

  if (userData?.id) {
    sidebarItemsList.push(
      {
        route: RouterPaths.profile + userData?.id,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
      },
      {
        route: RouterPaths.articles,
        text: 'Статьи',
        Icon: ArticleIcon,
        authOnly: true,
      },
    )
  }

  return sidebarItemsList
})
