import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RouterPage } from 'app/router/ui/router-page'

export const BrandsPage = lazy(() => import('pages/brands/brands-page'))
export const BrandCreatePage = lazy(
  () => import('pages/brands/brand-create-page'),
)
export const BrandDetailsPage = lazy(
  () => import('pages/brands/brand-details-page'),
)

export const brandsRoutes = [
  <Route
    path="brands"
    element={
      <RouterPage isPrivate>
        <BrandsPage />
      </RouterPage>
    }
  >
    <Route
      path="create"
      element={
        <RouterPage isPrivate>
          <BrandCreatePage />
        </RouterPage>
      }
    />
    <Route
      path=":slug"
      element={
        <RouterPage isPrivate>
          <BrandDetailsPage />
        </RouterPage>
      }
    />
  </Route>,
]
