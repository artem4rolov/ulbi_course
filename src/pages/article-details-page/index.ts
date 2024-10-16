import { lazy } from 'react'

const ArticleDetailsPageAsync = lazy(() => import('./ui/article-details-page'))

export { ArticleDetailsPageAsync as ArticleDetailsPage }

export * from './model/types/article-details-comment-schema.types'
