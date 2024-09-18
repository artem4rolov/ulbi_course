import { RouterPaths } from 'shared'
import { AboutUsIcon, GoHomeIcon, ProfileIcon } from 'shared/assets'

export type SidebarItemType = {
  route: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const sidebarItemsList: SidebarItemType[] = [
  { route: RouterPaths.main, text: 'Главная', Icon: GoHomeIcon },
  { route: RouterPaths.about, text: 'О нас', Icon: AboutUsIcon },
  {
    route: RouterPaths.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
]
