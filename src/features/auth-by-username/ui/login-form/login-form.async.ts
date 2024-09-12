import { FC, lazy } from 'react'
import { LoginFormProps } from './login-form'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import('./login-form')), 1500),
    ),
)
