import { PropsWithChildren, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppRouterPaths } from './types'

import RootLayout from 'widgets/layouts/RootLayout'

const HomePage = lazy(() => import('pages/home-page'))
import categoriesRoutes from 'pages/categories'
import brandsRoutes from 'pages/brands'
import attributesRoutes from 'pages/attributes'
import productsRoutes from 'pages/products'
import { sandBoxPages } from './sandbox'
const NotFoundPage = lazy(() => import('pages/not-found'))

export const PageLoader = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<div>PAGE LOADER...</div>}>
    <>{children}</>
  </Suspense>
)

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
              <PageLoader>
                <HomePage />
              </PageLoader>
            }
          />
          {...categoriesRoutes}
          {...brandsRoutes}
          {...attributesRoutes}
          {...productsRoutes}
          {...sandBoxPages}
          <Route
            path={AppRouterPaths.notFound}
            element={
              <PageLoader>
                <NotFoundPage />
              </PageLoader>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
