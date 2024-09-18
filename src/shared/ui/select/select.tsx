import { classNames, Mods } from 'shared/helpers'

import styles from './select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

type SelectOption = {
  value: string
  content: string
}

interface ISelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo((props: ISelectProps) => {
  const { className, label, onChange, options, value, readonly } = props
  const mods: Mods = {}

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option key={opt.value} className={styles['select-option']}>
        {opt.content}
      </option>
    ))
  }, [])

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange && e.target.value) {
      onChange(e.target.value)
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
})
