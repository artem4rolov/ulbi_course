import { FC } from 'react'
import '../../styles/index.scss'
import { classNames } from 'shared'

interface ThemeProviderDecoratorProps {
    theme: 'light' | 'dark',
    children: React.ReactNode
}


export const ThemeProviderDecorator: FC<ThemeProviderDecoratorProps> = ({theme = 'light', children}) => {
    return (
        <div
            className={`app ${theme}`}
        >
            {children}
        </div>
    )
}