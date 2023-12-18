import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRouterPaths } from 'pages/types'
import { PageLoader } from 'shared/ui/page-loader'
import { PrivateRoute } from './private-route'

import RootLayout from 'widgets/layouts/root-layout'
const HomePage = lazy(() => import('pages/home-page'))
const LoginPage = lazy(() => import('pages/login'))
const ProfilePage = lazy(() => import('pages/profile'))
import categoriesRoutes from 'pages/categories'
import brandsRoutes from 'pages/brands'
import attributesRoutes from 'pages/attributes'
import productsRoutes from 'pages/products'
import { sandBoxPages } from 'pages/sandbox'
import warehouseRoutes from 'pages/warehouse'
import ordersRoutes from 'pages/order'
import staffRoutes from 'pages/staff'
import { Page } from 'app/router/ui/page'
const NotFoundPage = lazy(() => import('pages/not-found'))

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRouterPaths.home}
          element={
            <Page>
              <RootLayout />
            </Page>
          }
        >
          <Route
            index
            element={
              <Page isPrivate={true}>
                <HomePage />
              </Page>
            }
          />
          {...categoriesRoutes}
          {...brandsRoutes}
          {...attributesRoutes}
          {...productsRoutes}
          {...warehouseRoutes}
          {...ordersRoutes}
          {...staffRoutes}
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
