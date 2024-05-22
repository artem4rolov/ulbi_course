import React, { FC } from 'react'
import { Input } from 'shared'

interface LoginFormProps {
  className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="username"
        onChange={(value) => console.log(value)}
        autoFocus={true}
      />
      <Input
        type="text"
        placeholder="password"
        onChange={(value) => console.log(value)}
      />
    </div>
  )
}
