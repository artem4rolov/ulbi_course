import { ArticleSortField } from 'entities/article/model/types/article.types'
import { useMemo } from 'react'
import { Select, SelectOption } from 'shared'
import { SortOrder } from 'shared/types'

import classes from './article-sort-selector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newOrder: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { onChangeOrder, onChangeSort, order, sort, className } = props
  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      { value: 'asc', content: 'По возрастанию' },
      { value: 'desc', content: 'По убыванию' },
    ],
    [],
  )
  const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      { value: ArticleSortField.CREATED, content: 'По дате создания' },
      { value: ArticleSortField.TITLE, content: 'По названию' },
      { value: ArticleSortField.VIEWS, content: 'По количеству просмотров' },
    ],
    [],
  )

  return (
    <div className={classes['article-sort-selector']}>
      <Select<SortOrder>
        options={orderOptions}
        label="Сортировать - "
        onChange={onChangeOrder}
        value={order}
      />
      <Select<ArticleSortField>
        options={sortOptions}
        label="по - "
        onChange={onChangeSort}
        value={sort}
      />
    </div>
  )
}

export default ArticleSortSelector
