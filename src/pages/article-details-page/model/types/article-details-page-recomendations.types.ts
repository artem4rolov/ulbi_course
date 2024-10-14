import { EntityState } from '@reduxjs/toolkit'
import { ArticleSchema } from 'entities/article'

export interface ArticleDetailsRecomendationsSchema
  extends EntityState<ArticleSchema> {
  isLoading?: boolean
  error?: string
}
