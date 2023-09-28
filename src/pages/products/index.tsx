import { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

export const ProductsPage = lazy(() => import('./products-page'))
export const ProductDetailsPage = lazy(() => import('./product-details-page'))
export const ProductCreatePage = lazy(() => import('./product-create-page'))

export default [
  <Route
    path="products"
    element={
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <ProductsPage />
      </Suspense>
    }
  >
    <Route
      path="create"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <ProductCreatePage />
        </Suspense>
      }
    />
    <Route
      path=":id"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <ProductDetailsPage />
        </Suspense>
      }
    />
  </Route>,
]
