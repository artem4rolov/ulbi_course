import { FC, lazy } from 'react'
import { LoginFormProps } from './login-form'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => import('./login-form'),
)
