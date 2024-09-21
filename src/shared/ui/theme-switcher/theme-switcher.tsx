import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { useTheme } from 'shared/hooks'
import { Button } from '../button'
import { ButtonSize, ButtonTheme } from '../button/button.types'
import { memo } from 'react'

const SwitchIcon = {
  app_dark_theme: <DarkThemeIcon />,
  app_light_theme: <LightThemeIcon />,
}

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    theme && (
      <div>
        <Button
          theme={ButtonTheme.LINK}
          size={ButtonSize.BUTTON_SIZE_M}
          onClick={toggleTheme}
        >
          {
            //@ts-ignore
            SwitchIcon[theme]
          }
        </Button>
      </div>
    )
  )
})
