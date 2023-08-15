import { lazy } from 'react'
import { Route } from 'react-router-dom'

export const CategoriesPage = lazy(() => import('./categories'))
export const CategoryCreatePage = lazy(() => import('./create'))

export default [
  <Route
    path="categories"
    element={<CategoriesPage />}
  >
    <Route
      path="create"
      element={<CategoryCreatePage />}
    />
  </Route>,
]
