import { lazy } from 'react'

const ArticlesPageAsync = lazy(() => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null)
    }, 1000)
  }).then(() => {
    return import('./ui/articles-page')
  })
})

export { ArticlesPageAsync as ArticlesPage }
