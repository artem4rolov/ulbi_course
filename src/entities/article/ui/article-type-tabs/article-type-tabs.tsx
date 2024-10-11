import { ArticleType } from '../../model/types/article.types'
import { TabItem, TabsList } from 'shared/ui'
import { useMemo } from 'react'

interface ArticleTypeTabs {
  className?: string
  onChangeTab: (value: string) => void
  value: ArticleType
}

export const ArticleTypeTabs = (props: ArticleTypeTabs) => {
  const { onChangeTab, className, value } = props
  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: 'Все статьи' },
      { value: ArticleType.ECONOMICS, content: 'Экономика' },
      { value: ArticleType.IT, content: 'IT' },
      { value: ArticleType.SCIENCE, content: 'Наука' },
    ],
    [],
  )

  return (
    <TabsList
      className={className}
      tabs={typeTabs}
      onTabClick={onChangeTab}
      value={value}
    />
  )
}
