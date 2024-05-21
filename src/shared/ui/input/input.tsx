import React, { FC, InputHTMLAttributes } from 'react'

import styles from './input.styles.scss'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange: (value: string) => void
  value: string
}

const Input: FC<InputProps> = (props) => {
  const {} = props

  return (
    <div className={styles['input-wrapper']}>
      <input type="text" />
    </div>
  )
}

export default Input
