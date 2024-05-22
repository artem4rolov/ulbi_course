import { InputHTMLAttributes } from 'react'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  onChange?: (value: string) => void
  value?: string
  placeholder?: string
  autoFocus?: boolean
}
