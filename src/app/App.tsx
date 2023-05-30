import { StrictMode, Suspense } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { AppRouter } from 'app/providers/router'
import { Router } from 'pages'
// import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './tailwind.css'
import './global.css'
import { ToastRoot } from 'shared/ui-kit/Toast/ToastRoot'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<div>GLOBAL LOADER...</div>}>
          <Router />
          <ToastRoot />
        </Suspense>
      </QueryClientProvider>
    </StrictMode>
  )
}
