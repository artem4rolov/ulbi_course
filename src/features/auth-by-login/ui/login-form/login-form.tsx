import React, { FC } from 'react'

interface LoginFormProps {
  value: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
    </div>
  )
}
