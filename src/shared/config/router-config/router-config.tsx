import { AboutPageAsync as AboutPage, MainPage } from 'pages'
import { NotFoundPage } from 'pages/not-found-page'
import { type RouteProps } from 'react-router'

export enum RouterNames {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RouterPaths: Record<RouterNames, string> = {
  [RouterNames.MAIN]: '/',
  [RouterNames.ABOUT]: '/about',
  [RouterNames.NOT_FOUND]: '*',
}

export const routerConfig: Record<RouterNames, RouteProps> = {
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
}
