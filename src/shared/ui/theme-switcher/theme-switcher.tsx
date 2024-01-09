import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { useTheme } from 'shared/hooks'
import { Button } from '../button'
import { ButtonTheme } from '../button/button.types'

const SwitchIcon = {
  dark: <DarkThemeIcon />,
  light: <LightThemeIcon />
}

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <Button theme={ButtonTheme.LINK} onClick={toggleTheme}>
        {SwitchIcon[theme]}
      </Button>
    </div>
  )
}
