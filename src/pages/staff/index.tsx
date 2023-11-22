import { Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const StaffPage = lazy(() => import('./staff-page'))

export default [
  <Route
    path="staff"
    element={
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <StaffPage />
      </Suspense>
    }
  ></Route>,
]
