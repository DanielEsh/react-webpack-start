import { StrictMode, Suspense } from 'react'
// import { BrowserRouter } from 'react-router-dom'
// import { AppRouter } from 'app/providers/router'
import { AppRouter } from 'pages'
// import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'shared/lib/react-query'
import { NotificationRoot, NotificationProvider } from 'shared/notification'

import './tailwind.css'
import './global.css'

export const App = () => {
  return (
    <StrictMode>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>GLOBAL LOADER...</div>}>
            <AppRouter />
            <NotificationRoot />
          </Suspense>
        </QueryClientProvider>
      </NotificationProvider>
    </StrictMode>
  )
}
