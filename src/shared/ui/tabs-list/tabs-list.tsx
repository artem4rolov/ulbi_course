import { ReactNode, useCallback } from 'react'
import { classNames } from 'shared/helpers'
import { CardComponent, CardTheme } from '../card-component/card-component'

import classes from './tabs-list.module.scss'

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsListProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: string) => void
}

export const TabsList = (props: TabsListProps) => {
  const { tabs, value, className, onTabClick } = props

  const clickHandle = useCallback(
    (tab: string) => {
      // замыкание используется для того, чтобы сразу прокинуть tab, вместо ClickHandleEvent
      // пример без замыкания ниже закомментирован
      return () => {
        onTabClick(tab)
      }
    },
    [onTabClick],
  )
  // const clickHandle = useCallback(
  //   (tab: TabItem) => {
  //       onTabClick?.(tab)

  //   },
  //   [onTabClick],
  // )

  return (
    <div className={classNames(classes['tabs-list'], {}, [className])}>
      {tabs.map((tab) => (
        <CardComponent
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          key={tab.value}
          className={classes['tabs-list-tem']}
          onClick={clickHandle(tab.value)}
        >
          {tab.content}
        </CardComponent>
      ))}
    </div>
  )
}
