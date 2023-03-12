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
            <div className="app flex w-full">
              <div className="relative h-screen min-w-[280px]">
                <div className="fixed h-screen w-[280px] bg-neutral-300">
                  SIDEBAR
                </div>
              </div>

              <div className="content relative w-full">
                <div className="bg-neutral-800 text-white">
                  <div>HEADER</div>
                  <div className="flex gap-3">
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/about'}>О сайте</Link>
                    <Link to={'/collections'}>Collections</Link>
                    <Link to={'/collections/1'}>Collections 1</Link>
                  </div>
                </div>

                <div className="page">
                  <AppRouter />
                </div>

                <div className="bg-neutral-800 text-white">FOOTER</div>
              </div>
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      </Suspense>
    </StrictMode>
  )
}
