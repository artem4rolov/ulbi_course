import { EntityState } from '@reduxjs/toolkit'
import {
  ArticleSchema,
  ArticleSortField,
  ArticleType,
  ArticleView,
} from 'entities/article'
import { SortOrder } from 'shared/types'

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
  isLoading?: boolean
  error?: string

  view: ArticleView

  // pagination
  page: number
  limit: number
  hasMore: boolean

  // filters
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  // initializing
  _inited: boolean
}
