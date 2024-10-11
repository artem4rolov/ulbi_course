import { classNames, Mods } from 'shared/helpers'

import styles from './select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export type SelectOption<T extends string> = {
  value: T
  content: string
}

interface ISelectProps<T extends string> {
  className?: string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
  const { className, label, onChange, options, value, readonly } = props
  const mods: Mods = {}

  console.log(options)

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option
        key={opt.value}
        className={styles['select-option']}
        value={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange && e.target.value) {
      onChange(e.target.value as T)
    }
  }

  return (
    <div className={classNames(styles['select-wrapper'], mods, [className])}>
      {label && (
        <span className={styles['select-label']}>{label + ' ' + '>'}</span>
      )}
      <select
        value={value}
        onChange={onChangeHandler}
        className={styles['select-component']}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
}
