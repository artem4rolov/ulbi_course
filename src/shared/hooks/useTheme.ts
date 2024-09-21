import { useContext, useEffect } from 'react'
import { Theme, ThemeContext } from 'app/providers'
import { LOCAL_STORAGE_THEME_KEY } from '../constants'

export interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme

    switch (theme) {
      case Theme.dark:
        newTheme = Theme.light
        break
      case Theme.light:
        newTheme = Theme.orange
        break
      case Theme.orange:
        newTheme = Theme.dark
        break

      default:
        newTheme = Theme.light
    }

    setTheme?.(newTheme)
    document.body.className = newTheme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  useEffect(() => {
    if (theme) {
      document.body.className = theme
    }
  }, [])

  return { theme: theme || Theme.light, toggleTheme }
}
