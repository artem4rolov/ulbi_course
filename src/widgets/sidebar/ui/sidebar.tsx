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
            data-testid="sidebar"
            className={classNames(styles.sidebar, {}, [
                props.className,
                collapsed ? styles.collapsed : styles.open
            ])}
        >
            <button data-testid="sidebar-collapse-btn" onClick={() => { setCollapsed((prev) => !prev) }}>collapse</button>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    )
}
