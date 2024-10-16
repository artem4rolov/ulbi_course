import { lazy } from 'react'

const ArticlesEditPageAsync = lazy(() => import('./ui/article-edit-page'))

export { ArticlesEditPageAsync as ArticlesEditPage }
