import { lazy } from 'react'

const ArticlesPageAsync = lazy(() => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null)
    }, 400)
  }).then(() => {
    return import('./ui/articles-page/articles-page')
  })
})

export { ArticlesPageAsync as ArticlesPage }
export { ArticlesPageSchema } from './model/types/article-page.types'
