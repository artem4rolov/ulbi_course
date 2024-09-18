import { ChangeEvent, memo, useEffect, useRef, useState } from 'react'

import styles from './input.module.scss'
import { InputProps } from './input.types'
import { Mods } from 'shared/helpers'

export const Input = memo((props: InputProps) => {
  const {
    placeholder,
    onChange,
    value,
    type,
    autoFocus,
    readOnly,
    ...otherProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [caretPosition, setCuretPosition] = useState(0)
  const [isFocused, setIsFocused] = useState(false)

  const isCaretVisible = isFocused && !readOnly

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
    setCuretPosition(e.target.value.length)
  }

  const onFocus = () => {
    setIsFocused(true)
  }

  const onBlur = () => {
    setIsFocused(false)
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

  const mods: Mods = {
    [styles[readOnly + '']]: readOnly,
  }

  return (
    <div className={styles['input-container']}>
      {placeholder && <span>{placeholder + ' >>'}</span>}
      <div className={styles['input-wrapper']}>
        <input
          type={type}
          onSelect={onSelectChange}
          // трабл с автофокусом
          autoFocus
          onChange={onInputChange}
          onBlur={onBlur}
          onFocus={onFocus}
          ref={inputRef}
          readOnly={readOnly}
          value={value}
          {...otherProps}
        />
        {isCaretVisible && (
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
