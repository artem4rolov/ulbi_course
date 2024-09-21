import { type ReactNode } from 'react'

export enum Theme {
  dark = 'app_dark_theme',
  light = 'app_light_theme',
  orange = 'app_orange_theme',
}

export interface ThemeContextProviderProps {
  children: ReactNode
}
