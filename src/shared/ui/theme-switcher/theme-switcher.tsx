import { DarkThemeIcon, LightThemeIcon } from 'shared/assets'
import { useTheme } from 'shared/hooks'
import { Button } from '../button'
import { ButtonSize, ButtonTheme } from '../button/button.types'

const SwitchIcon = {
    dark: <DarkThemeIcon />,
    light: <LightThemeIcon />
}

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div>
            <Button theme={ButtonTheme.LINK} size={ButtonSize.BUTTON_SIZE_M} onClick={toggleTheme}>
                {SwitchIcon[theme]}
            </Button>
        </div>
    )
}
