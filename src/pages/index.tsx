import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RootLayout from 'widgets/layouts/RootLayout'
import { MainPage } from 'pages/MainPage/MainPage'
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import { GlobalNotFoundPage } from 'pages/GlobalNotFound'

import CollectionsRouting from 'pages/collection'
import categoriesRoutes from 'pages/categories'
import brandsRoutes from 'pages/brands'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RootLayout />}
        >
          <Route
            index
            element={<MainPage />}
          />
          <Route
            path="about"
            element={<AboutPageAsync />}
          />

          {...CollectionsRouting}
          {...categoriesRoutes}
          {...brandsRoutes}
        </Route>

        <Route
          path="*"
          element={<GlobalNotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}
