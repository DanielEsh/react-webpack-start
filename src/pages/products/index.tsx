import { lazy } from 'react'
import { Route } from 'react-router-dom'

export const ProductsPage = lazy(() => import('./products-page'))
export const ProductCreatePage = lazy(() => import('./product-create-page'))

export default [
  <Route
    path="products"
    element={<ProductsPage />}
  >
    <Route
      path="create"
      element={<ProductCreatePage />}
    />
  </Route>,
]
