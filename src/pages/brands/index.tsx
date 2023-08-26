import { lazy } from 'react'
import { Route } from 'react-router-dom'

export const BrandsPage = lazy(() => import('./brands-page'))
export const BrandCreatePage = lazy(() => import('./brand-create-page'))
export const BrandDetailsPage = lazy(() => import('./brand-details-page'))

export default [
  <Route
    path="brands"
    element={<BrandsPage />}
  >
    <Route
      path="create"
      element={<BrandCreatePage />}
    />
    <Route
      path=":slug"
      element={<BrandDetailsPage />}
    />
  </Route>,
]
