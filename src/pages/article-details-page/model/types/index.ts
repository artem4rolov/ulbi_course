import { ArticleDetailsCommentSchema } from './article-details-comment-schema.types'
import { ArticleDetailsRecomendationsSchema } from './article-details-page-recomendations.types'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema
  recomendations: ArticleDetailsRecomendationsSchema
}
