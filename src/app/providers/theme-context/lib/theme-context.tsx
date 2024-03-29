import { createContext, type Dispatch, type SetStateAction } from 'react'
import { type Theme } from '../theme-context.types'

interface ThemeContextProps {
  theme?: Theme
  setTheme?: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({})
