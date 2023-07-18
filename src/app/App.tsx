import { StrictMode, Suspense } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { AppRouter } from 'app/providers/router'
import { Router } from 'pages'
// import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationRoot, NotificationProvider } from 'shared/notification'

import './tailwind.css'
import './global.css'

const queryClient = new QueryClient()

export const App = () => {
  return (
    <StrictMode>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>GLOBAL LOADER...</div>}>
            <Router />
            <NotificationRoot />
          </Suspense>
        </QueryClientProvider>
      </NotificationProvider>
    </StrictMode>
  )
}
