import { lazy } from 'react'

const ArticlesEditPageAsync = lazy(() => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null)
    }, 400)
  }).then(() => {
    return import('./ui/article-edit-page')
  })
})

export { ArticlesEditPageAsync as ArticlesEditPage }
