import { AboutPageAsync as AboutPage, MainPage } from 'pages'
import { type RouteProps } from 'react-router'

export enum RouterNames {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RouterPaths: Record<RouterNames, string> = {
  [RouterNames.MAIN]: '/',
  [RouterNames.ABOUT]: '/about'
}

export const routerConfig: Record<RouterNames, RouteProps> = {
  [RouterNames.MAIN]: {
    path: RouterPaths.main,
    element: <MainPage />
  },
  [RouterNames.ABOUT]: {
    path: RouterPaths.about,
    element: <AboutPage />
  }
}
