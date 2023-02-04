import { StrictMode } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'

import './tailwind.css'
import './global.css'

export const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <div className="app">
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О сайте</Link>
          <AppRouter />
        </div>
      </BrowserRouter>
    </StrictMode>
  )
}
