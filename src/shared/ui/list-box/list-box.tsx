import { ReactNode } from 'react'
import { Listbox as HeadlessListBox } from '@headlessui/react'
import classes from './list-box.module.scss'
import { classNames } from 'shared/helpers'
import { Button } from '../button'
import { ButtonTheme } from '../button/button.types'
import { HStack } from '../stack'

type DropDownDirection = 'top' | 'bottom'
export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  items?: ListBoxItem[]
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropDownDirection
  label?: string
}

export const Listbox = (props: ListBoxProps) => {
  const {
    className,
    items,
    value,
    onChange,
    defaultValue,
    readonly,
    direction = 'bottom',
    label,
  } = props

  const optionalClasses = [classes[direction]]

  return (
    <HStack>
      {label && <span>{label + ' >>'}</span>}
      <HeadlessListBox
        as={'div'}
        className={classNames(classes['list-box'], {}, [className])}
        value={value}
        onChange={onChange}
        disabled={readonly}
      >
        <HeadlessListBox.Button className={classes['list-box__button']}>
          <Button theme={ButtonTheme.OUTLINE_INVERTED}>
            {value ?? defaultValue}
          </Button>
        </HeadlessListBox.Button>
        <HeadlessListBox.Options
          className={classNames(
            classes['list-box__options'],
            {},
            optionalClasses,
          )}
        >
          {items?.map((item) => (
            <HeadlessListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ active, selected, disabled }) => (
                <li
                  className={classNames(classes['list-box__option'], {
                    [classes['list-box__option_active']]: active,
                    [classes['list-box__option_selected']]: selected,
                    [classes['list-box__option_disabled']]: disabled,
                  })}
                >
                  {selected && '🟢'}
                  {item.content}
                </li>
              )}
            </HeadlessListBox.Option>
          ))}
        </HeadlessListBox.Options>
      </HeadlessListBox>
    </HStack>
  )
}
