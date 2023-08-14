import { lazy } from 'react'
import { Route } from 'react-router-dom'

export const CategoriesPage = lazy(() => import('./categories'))

export default [
  <Route
    path="categories"
    element={<CategoriesPage />}
  ></Route>,
]
