import { Route, RouteProps } from 'react-router-dom'
import { PrivateRoute } from 'app/router/ui/private-route'
import RootLayout from 'widgets/layouts/root-layout'
import { AppLayouts, AppRoutes } from 'app/router/types'
import { lazy } from 'react'
import { PageLoader } from 'shared/ui/page-loader'

const HomePage = lazy(() => import('pages/home-page'))

const appRoutes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    index: true,
    element: (
      <PrivateRoute>
        <PageLoader>
          <HomePage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.CATEGORIES]: {
    path: 'categories',
    element: <div>Categories</div>,
  },
  [AppRoutes.CATEGORY_CREATE]: {
    path: 'categories/create',
    element: <div>Categories create</div>,
  },
  [AppRoutes.CATEGORY_DETAILS]: {
    path: 'categories/:id',
    element: <div>Categories details</div>,
  },
}

export const routerConfig: Record<AppLayouts, RouteProps> = {
  [AppLayouts.APP]: {
    path: '/',
    element: <RootLayout />,
    children: Object.entries(appRoutes).map(([key, route]) => (
      <Route
        key={key}
        {...route}
      />
    )),
  },
}
