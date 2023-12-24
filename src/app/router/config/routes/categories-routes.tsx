import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import {
  CategoriesPage,
  CategoryCreatePage,
  CategoryDetailsPage,
} from 'pages/categories'

export const categoriesRoutes = {
  [AppRoutes.Categories]: {
    path: 'categories',
    element: (
      <RouterPage>
        <CategoriesPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.CategoryCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <CategoryCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.CategoryDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <CategoryDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}
