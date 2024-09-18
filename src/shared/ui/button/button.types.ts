export enum ButtonTheme {
  OUTLINE = 'outline',
  OUTLINE_INVERTED = 'outline_inverted',
  OUTLINE_RED = 'outline_red',
  SOLID = 'solid',
  SOLID_INVERTED = 'solid_inverted',
  LINK = 'link',
  LINK_INVERTED = 'link_inverted',
}

export enum ButtonSize {
  BUTTON_SIZE_M = 'size_m',
  BUTTON_SIZE_L = 'size_l',
  BUTTON_SIZE_XL = 'size_xl',
  BUTTON_SQUARED = 'squared',
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string
  theme: ButtonTheme
  size?: ButtonSize
  children: React.ReactNode | string
  testId?: string
  disabled?: boolean
}
