import { Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const StaffPage = lazy(() => import('./staff-page'))
const StaffCreatePage = lazy(() => import('./staff-create-page'))

export default [
  <Route
    path="staff"
    element={
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <StaffPage />
      </Suspense>
    }
  >
    <Route
      path="create"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <StaffCreatePage />
        </Suspense>
      }
    />
  </Route>,
]
