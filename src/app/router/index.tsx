import { Navigate, RouteProps } from 'react-router-dom'
import RootLayout from 'widgets/layouts/root-layout'
import { lazy, PropsWithChildren, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useStore } from 'effector-react'
import { $authStore } from 'features/auth/model'

const HomePage = lazy(() => import('pages/home-page'))

const PageLoader = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<div>PAGE LOADER...</div>}>
    <>{children}</>
  </Suspense>
)

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isSuccessAuth } = useStore($authStore)

  return isSuccessAuth ? <>{children}</> : <Navigate to="/login" />
}

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
