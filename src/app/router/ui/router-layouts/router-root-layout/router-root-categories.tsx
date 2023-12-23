import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RouterPage } from 'app/router/ui/router-page'

export const CategoriesPage = lazy(() => import('pages/categories/categories'))
export const CategoryCreatePage = lazy(() => import('pages/categories/create'))
export const CategoryDetailsPage = lazy(
  () => import('pages/categories/category-details-page'),
)

export const categoriesRoutes = [
  <Route
    path="categories"
    element={
      <RouterPage isPrivate>
        <CategoriesPage />
      </RouterPage>
    }
  >
    <Route
      path="create"
      element={
        <RouterPage isPrivate>
          <CategoryCreatePage />
        </RouterPage>
      }
    />
    <Route
      path=":id"
      element={
        <RouterPage isPrivate>
          <CategoryDetailsPage />
        </RouterPage>
      }
    />
  </Route>,
]
