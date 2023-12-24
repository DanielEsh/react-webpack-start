import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import { BrandCreatePage, BrandDetailsPage, BrandsPage } from 'pages/brands'

export const brandsRoutes = {
  [AppRoutes.Brands]: {
    path: 'brands',
    element: (
      <RouterPage>
        <BrandsPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.BrandCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <BrandCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.BrandDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <BrandDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}
