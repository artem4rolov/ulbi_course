import { InputHTMLAttributes } from 'react'

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
  > {
  onChange?: (value: string) => void
  value?: string | number
  placeholder?: string
  autoFocus?: boolean
  readOnly?: boolean
}
