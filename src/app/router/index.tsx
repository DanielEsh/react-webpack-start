import { RouteProps } from 'react-router-dom'
import RootLayout from 'widgets/layouts/root-layout'
import { PageLoader, PrivateRoute } from 'pages'
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('pages/home-page'))

export enum AppRoutes {
  HOME = 'home',
  CATEGORIES = 'CATEGORIES',
  CATEGORY_CREATE = 'CATEGORY-CREATE',
  CATEGORY_DETAILS = 'CATEGORY-DETAILS',
}

export enum AppLayouts {
  APP = 'APP',
}

const appRoutes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    index: true,
    element: <div>HOME page</div>,
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

export const routerCfg: Record<AppLayouts, RouteProps> = {
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
