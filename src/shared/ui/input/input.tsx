import { ChangeEvent, memo, useEffect, useRef, useState } from 'react'

import styles from './input.module.scss'
import { InputProps } from './input.types'

export const Input = memo((props: InputProps) => {
  const { placeholder, onChange, value, type, autoFocus, ...otherProps } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [caretPosition, setCuretPosition] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCuretPosition(e.target.value.length)
  }

  // хз что за тип тут с selectionEnd/selectionStart
  const onSelectChange = (e: any) => {
    setCuretPosition(e.target.selectionStart)
  }

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused, inputRef])

  return (
    <div
      className={styles['input-container']}
      onClick={() => setIsFocused(true)}
    >
      {placeholder && <span>{placeholder + ' >>'}</span>}
      <div
        className={styles['input-wrapper']}
        onBlur={() => setIsFocused(false)}
      >
        <input
          type={type}
          onSelect={onSelectChange}
          // трабл с автофокусом
          autoFocus
          onChange={onInputChange}
          ref={inputRef}
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${caretPosition * 7.2}px` }}
            className={styles['input-caret']}
          >
            _
          </span>
        )}
      </div>
    </div>
  )
})
