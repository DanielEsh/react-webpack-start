import { StrictMode, Suspense } from 'react'
import { AppRouter, router } from 'app/router/ui/app-router'
import { RouterProvider } from 'react-router-dom'
// import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from 'shared/lib/react-query'
import { NotificationRoot, NotificationProvider } from 'shared/notification'

import './tailwind.css'
import './global.css'
import { changeAuthStatus } from 'features/auth/model'

export const App = () => {
  if (localStorage.getItem('refreshToken')) {
    changeAuthStatus(true)
  }

  return (
    <StrictMode>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<div>GLOBAL LOADER...</div>}>
            {/*<AppRouter />*/}
            <RouterProvider router={router} />
            <NotificationRoot />
          </Suspense>
        </QueryClientProvider>
      </NotificationProvider>
    </StrictMode>
  )
}
