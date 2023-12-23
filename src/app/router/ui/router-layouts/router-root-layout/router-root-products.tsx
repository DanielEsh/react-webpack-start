import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RouterPage } from 'app/router/ui/router-page'

export const ProductsPage = lazy(() => import('pages/products/products-page'))
export const ProductDetailsPage = lazy(
  () => import('pages/products/product-details-page'),
)
export const ProductCreatePage = lazy(
  () => import('pages/products/product-create-page'),
)

export const productsRoutes = [
  <Route
    path="products"
    element={
      <RouterPage isPrivate>
        <ProductsPage />
      </RouterPage>
    }
  >
    <Route
      path="create"
      element={
        <RouterPage isPrivate>
          <ProductCreatePage />
        </RouterPage>
      }
    />
    <Route
      path=":id"
      element={
        <RouterPage isPrivate>
          <ProductDetailsPage />
        </RouterPage>
      }
    />
  </Route>,
]
