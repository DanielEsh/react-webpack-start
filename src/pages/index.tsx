import { PropsWithChildren, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useStore } from 'effector-react'
import { AppRouterPaths } from './types'
import { $authStore } from 'features/auth/model'

import RootLayout from 'widgets/layouts/RootLayout'

const HomePage = lazy(() => import('pages/home-page'))
const LoginPage = lazy(() => import('pages/login'))
const ProfilePage = lazy(() => import('pages/profile'))
import categoriesRoutes from 'pages/categories'
import brandsRoutes from 'pages/brands'
import attributesRoutes from 'pages/attributes'
import productsRoutes from 'pages/products'
import { sandBoxPages } from './sandbox'
import warehouseRoutes from 'pages/warehouse'
const NotFoundPage = lazy(() => import('pages/not-found'))

export const PageLoader = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<div>PAGE LOADER...</div>}>
    <>{children}</>
  </Suspense>
)

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isSuccessAuth } = useStore($authStore)

  return isSuccessAuth ? <>{children}</> : <Navigate to="/login" />
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRouterPaths.home}
          element={
            <PageLoader>
              <RootLayout />
            </PageLoader>
          }
        >
          <Route
            index
            element={
              <PrivateRoute>
                <PageLoader>
                  <HomePage />
                </PageLoader>
              </PrivateRoute>
            }
          />
          {...categoriesRoutes}
          {...brandsRoutes}
          {...attributesRoutes}
          {...productsRoutes}
          {...warehouseRoutes}
          {...sandBoxPages}
          <Route
            path={'profile'}
            element={
              <PageLoader>
                <ProfilePage />
              </PageLoader>
            }
          />
          <Route
            path={AppRouterPaths.notFound}
            element={
              <PageLoader>
                <NotFoundPage />
              </PageLoader>
            }
          />
        </Route>
        <Route path={'login'}>
          <Route
            index
            element={<LoginPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
