import { FC } from 'react'
import '../../styles/index.scss'
import { Theme } from '../theme-context'

interface ThemeProviderDecoratorProps {
  theme: Theme
  children: React.ReactNode
}

export const ThemeProviderDecorator: FC<ThemeProviderDecoratorProps> = ({
  theme = Theme.light,
  children,
}) => {
  return <div className={`app ${theme}`}>{children}</div>
}
