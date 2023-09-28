import { Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'

export const SandBoxPage = lazy(() => import('./sandbox-page'))
export const SandBoxPageIcons = lazy(() => import('./sandbox-icons-page'))

export const sandBoxPages = [
  <Route
    path="sandbox"
    element={
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <SandBoxPage />
      </Suspense>
    }
  />,
  <Route
    path="/sandbox/icons"
    element={
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <SandBoxPageIcons />
      </Suspense>
    }
  />,
]
