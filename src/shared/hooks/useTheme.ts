import { useContext } from 'react'
import { Theme, ThemeContext } from 'app/providers'
import { LOCAL_STORAGE_THEME_KEY } from '../constants'

export interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        setTheme(theme === Theme.light ? Theme.dark : Theme.light)
        localStorage.setItem(
            LOCAL_STORAGE_THEME_KEY,
            theme === Theme.light ? Theme.dark : Theme.light
        )
    }

    return { theme, toggleTheme }
}
