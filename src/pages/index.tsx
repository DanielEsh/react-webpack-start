import { BrowserRouter, Routes, Route } from 'react-router-dom'

import RootLayout from 'widgets/layouts/RootLayout'
import { MainPage } from 'pages/MainPage/MainPage'
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import CollectionsPage from 'pages/CollectionsPage/CollectionsPage'
import CollectionPage from 'pages/CollectionPage/CollectionPage'
import { GlobalNotFoundPage } from 'pages/GlobalNotFound'

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
          <Route
            path="collections"
            element={<CollectionsPage />}
          />
          <Route
            path="collections/:id"
            element={<CollectionPage />}
          />
        </Route>

        <Route
          path="*"
          element={<GlobalNotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}