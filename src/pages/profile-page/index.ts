import { lazy } from 'react'

export const ProfilePageAsync = lazy(() => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(null)
    }, 1000)
  }).then(() => {
    return import('./ui/profile-page')
  })
})
