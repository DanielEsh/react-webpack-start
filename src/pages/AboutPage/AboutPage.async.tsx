import { lazy } from 'react'

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import('./AboutPage')), 1500)
    }),
)
