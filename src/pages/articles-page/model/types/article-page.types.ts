import { EntityState } from '@reduxjs/toolkit'
import { ArticleSchema, ArticleView } from 'entities/article'

export interface ArticlesPageSchema extends EntityState<ArticleSchema> {
  isLoading?: boolean
  error?: string

  view: ArticleView

  // pagination
  page: number
  limit?: number
  hasMore: boolean
}
