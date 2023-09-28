import { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RootLayout from 'widgets/layouts/RootLayout'

const HomePage = lazy(() => import('pages/home-page'))
import categoriesRoutes from 'pages/categories'
import brandsRoutes from 'pages/brands'
import attributesRoutes from 'pages/attributes'
import productsRoutes from 'pages/products'
const NotFoundPage = lazy(() => import('pages/not-found'))

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
        >
          <Route
            index
            element={<HomePage />}
          />
          {...categoriesRoutes}
          {...brandsRoutes}
          {...attributesRoutes}
          {...productsRoutes}
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
