import { PropsWithChildren, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RootLayout from 'widgets/layouts/RootLayout'

const HomePage = lazy(() => import('pages/home-page'))
import categoriesRoutes from 'pages/categories'
import brandsRoutes from 'pages/brands'
import attributesRoutes from 'pages/attributes'
import productsRoutes from 'pages/products'
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
          path="/"
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
          <Route
            path="*"
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
