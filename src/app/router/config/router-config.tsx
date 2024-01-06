import RootLayout from 'widgets/layouts/root-layout'
import { lazy } from 'react'
import { RouterPage } from 'app/router/ui/router-page'
import { RouterConfig } from './types'
import { AppRoutes } from './constants'
import {
  attributesRoutes,
  brandsRoutes,
  categoriesRoutes,
  productsRoutes,
  warehouseRoutes,
  staffRoutes,
  ordersRoutes,
  sandboxRoutes,
} from './routes'

const HomePage = lazy(() => import('pages/home-page'))
const NotFoundPage = lazy(() => import('pages/not-found'))
const LoginPage = lazy(() => import('pages/login'))

export const routerConfig: RouterConfig = {
  [AppRoutes.Root]: {
    path: '/',
    element: <RootLayout />,
    children: {
      [AppRoutes.Home]: {
        index: true,
        element: <HomePage />,
      },
      ...attributesRoutes,
      ...brandsRoutes,
      ...categoriesRoutes,
      ...productsRoutes,
      ...warehouseRoutes,
      ...staffRoutes,
      ...ordersRoutes,
      ...sandboxRoutes,
      [AppRoutes.NotFound]: {
        path: '*',
        element: (
          <RouterPage>
            <NotFoundPage />
          </RouterPage>
        ),
      },
    },
  },
  [AppRoutes.LogIn]: {
    path: 'login',
    element: (
      <RouterPage>
        <LoginPage />
      </RouterPage>
    ),
  },
}
