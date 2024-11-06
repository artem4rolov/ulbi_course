import { Menu } from '@headlessui/react'
import { Theme } from 'app'
import { Fragment, ReactNode } from 'react'
import { classNames } from 'shared/helpers'
import { DropDownDirection } from 'shared/types/ui-types'
import { AppLink, AppLinkTheme } from '../app-link'
import classes from './dropdown.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content: ReactNode
  onClick?: () => void
  href?: string
}

interface DropDownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropDownDirection
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  top: classes.top,
  bottom: classes.bottom,
  'bottom left': classes.bottomLeft,
  'bottom right': classes.bottomRight,
  'top right': classes.topRight,
  'top left': classes.topLeft,
}

export const Dropdown = (props: DropDownProps) => {
  const { className, items, trigger, direction = 'bottom' } = props

  const optionalClasses = [mapDirectionClass[direction]]

  return (
    <Menu as={'div'} className={classNames(classes.dropdown, {}, [className])}>
      <Menu.Button className={classes['dropdown__button']}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={classNames(classes['dropdown__items'], {}, optionalClasses)}
      >
        {items.map((item) => {
          const content = ({
            active,
            disabled,
          }: {
            active: boolean
            disabled: boolean
          }) => (
            <button
              type="button"
              onClick={item.onClick}
              disabled={item.disabled}
              className={classNames(
                classes['dropdown__item'],
                {
                  [classes['dropdown__item_active']]: active,
                  [classes['dropdown__item_disabled']]: disabled,
                },
                [],
              )}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item
                theme={AppLinkTheme.INVERTED}
                key={item.href}
                as={AppLink}
                to={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            )
          }

          return (
            <Menu.Item key={item.href} as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
