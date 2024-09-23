import { ArticleSchema } from './article.types'

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: string
  data?: ArticleSchema
}
