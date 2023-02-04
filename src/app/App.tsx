import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import { MainPage } from 'pages/MainPage/MainPage'

import './tailwind.css'
import './global.css'

export const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
