import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Button, classNames, LangSwitcher, ThemeSwitcher } from 'shared'

import { ButtonSize, ButtonTheme } from 'shared/ui/button/button.types'
import { VStack } from 'shared/ui/stack'
import { getSidebarItems } from '../model/selectors/get-sidebar-items'
import { SidebarItem } from './sidebar-item/sidebar-item'

import styles from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { t } = useTranslation('translation')
  const [collapsed, setCollapsed] = useState(false)

  const sidebarItemsList = useSelector(getSidebarItems)

  return (
    <menu
      data-testid="sidebar"
      className={classNames(styles.sidebar, {}, [
        props.className,
        collapsed ? styles.collapsed : styles.open,
      ])}
    >
      <div
        className={
          !collapsed
            ? styles['sidebar-links']
            : styles['sidebar-links-collapsed']
        }
      >
        <VStack gap="8" align="start">
          {sidebarItemsList.map((link) => (
            <SidebarItem key={link.route} item={link} collapsed={collapsed} />
          ))}
        </VStack>
      </div>
      <div
        className={
          !collapsed
            ? styles['sidebar-settings']
            : styles['sidebar-settings-collapsed']
        }
      >
        <Button
          theme={ButtonTheme.SOLID_INVERTED}
          size={ButtonSize.BUTTON_SQUARED}
          testId="sidebar-toggle"
          className={styles['collapse-button']}
          onClick={() => {
            setCollapsed((prev) => !prev)
          }}
        >
          {collapsed ? '>' : '<'}
        </Button>
        <ThemeSwitcher />
        <LangSwitcher isShort={collapsed} />
      </div>
    </menu>
  )
})
