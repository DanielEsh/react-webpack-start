import { StrictMode, Suspense } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

import './tailwind.css'
import './global.css'

export const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>GLOBAL LOADER...</div>}>
        <BrowserRouter>
          <ErrorBoundary>
            <div className="app">
              <Link to={'/'}>Главная</Link>
              <Link to={'/about'}>О сайте</Link>
              <AppRouter />
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  )
}
