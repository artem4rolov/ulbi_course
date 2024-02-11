import { type FC, useState } from 'react'

import { ThemeContext } from '../lib/theme-context'
import { Theme, type ThemeContextProviderProps } from '../theme-context.types'
import { LOCAL_STORAGE_THEME_KEY } from 'shared/constants'

export const ThemeContextProvider: FC<ThemeContextProviderProps> = ({
    children
}) => {
    const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.light

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}
