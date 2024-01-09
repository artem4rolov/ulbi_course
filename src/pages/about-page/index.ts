import { lazy } from 'react'

export const AboutPageAsync = lazy(
  async () => await import('pages/about-page/ui/about-page')
)
