import {
  MainPage,
  AboutPageAsync as AboutPage,
  ProfilePageAsync as ProfilePage,
} from 'pages'
import { NotFoundPage } from 'pages/not-found-page'
import { type RouteProps } from 'react-router'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum RouterNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
  PROFILE = 'profile',
}

export const RouterPaths: Record<RouterNames, string> = {
  [RouterNames.MAIN]: '/',
  [RouterNames.ABOUT]: '/about',
  [RouterNames.PROFILE]: '/profile',
  [RouterNames.NOT_FOUND]: '*',
}

export const routerConfig: Record<RouterNames, AppRoutesProps> = {
  [RouterNames.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />,
  },
  [RouterNames.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />,
  },
  [RouterNames.NOT_FOUND]: {
    path: RouterPaths.not_found,
    element: <NotFoundPage />,
  },
  [RouterNames.PROFILE]: {
    path: RouterPaths.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
}
