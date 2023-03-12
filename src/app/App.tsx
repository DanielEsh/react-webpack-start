import { StrictMode, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { Sidebar } from 'widgets/Sidebar'
import { Header } from 'widgets/Header'

import './tailwind.css'
import './global.css'

export const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>GLOBAL LOADER...</div>}>
        <BrowserRouter>
          <ErrorBoundary>
            <div className="app flex w-full">
              <Sidebar />

              <div className="content relative w-full">
                <Header />

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
