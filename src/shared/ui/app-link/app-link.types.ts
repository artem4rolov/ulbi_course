import { type LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  PRIMARY_INVERTED = 'primary-inverted',
  INVERTED = 'secondary',
  INVERTED_INVERTED = 'secondary-inverted',
  USTYLED = 'unstyled',
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
}
