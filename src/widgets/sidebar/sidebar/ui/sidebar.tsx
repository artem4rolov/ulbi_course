import { useState } from 'react'
import { classNames, LangSwitcher, ThemeSwitcher } from 'shared'
import styles from './sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      className={classNames(styles.sidebar, {}, [
        props.className,
        collapsed ? styles.collapsed : styles.open
      ])}
    >
      <button onClick={() => { setCollapsed((prev) => !prev) }}>collapse</button>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  )
}
