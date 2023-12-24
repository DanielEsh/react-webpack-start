import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import {
  ProductCreatePage,
  ProductDetailsPage,
  ProductsPage,
} from 'pages/products'

export const productsRoutes = {
  [AppRoutes.Products]: {
    path: 'products',
    element: (
      <RouterPage>
        <ProductsPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.ProductCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <ProductCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.ProductDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <ProductDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}
