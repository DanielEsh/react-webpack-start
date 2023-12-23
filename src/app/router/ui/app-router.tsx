import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRouterPaths } from 'pages/types'
import { PageLoader } from 'shared/ui/page-loader'

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
import { RouterPage } from 'app/router/ui/router-page'
const NotFoundPage = lazy(() => import('pages/not-found'))

const combinedRootLayoutRoutes = () => {
  return (
    <>
      <Route
        index
        element={
          <RouterPage isPrivate={true}>
            <HomePage />
          </RouterPage>
        }
      />
      <Route
        path={'profile'}
        element={
          <PageLoader>
            <ProfilePage />
          </PageLoader>
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
        path={AppRouterPaths.notFound}
        element={
          <PageLoader>
            <NotFoundPage />
          </PageLoader>
        }
      />
    </>
  )
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRouterPaths.home}
          element={
            <RouterPage>
              <RootLayout />
            </RouterPage>
          }
        >
          {combinedRootLayoutRoutes()}
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
