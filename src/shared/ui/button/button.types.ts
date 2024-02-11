export enum ButtonTheme {
  OUTLINE = 'outline',
  SOLID = 'solid',
  LINK = 'link',
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
  > {
  className?: string
  theme: ButtonTheme
  children: React.ReactNode | string
}
