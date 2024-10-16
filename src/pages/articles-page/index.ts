import { lazy } from 'react'

const ArticlesPageAsync = lazy(() => import('./ui/articles-page/articles-page'))

export { ArticlesPageAsync as ArticlesPage }
export { ArticlesPageSchema } from './model/types/article-page.types'
