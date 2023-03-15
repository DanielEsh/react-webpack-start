import { StrictMode, Suspense } from 'react'
// import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from 'app/providers/router'
// import { ErrorBoundary } from 'app/providers/ErrorBoundary'

import './tailwind.css'
import './global.css'

export const App = () => {
  return (
    <StrictMode>
      <Suspense fallback={<div>GLOBAL LOADER...</div>}>
        <AppRouter />
      </Suspense>
    </StrictMode>
  )
}
