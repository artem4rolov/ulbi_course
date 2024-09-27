import { lazy } from 'react'

const ArticleDetailsPageAsync = lazy(() => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null)
    }, 1000)
  }).then(() => {
    return import('./ui/article-details-page')
  })
})

export { ArticleDetailsPageAsync as ArticleDetailsPage }

export * from './model/types/article-details-comment-schema.types'
