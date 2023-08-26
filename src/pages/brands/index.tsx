import { lazy } from 'react'
import { Route } from 'react-router-dom'

export const BrandsPage = lazy(() => import('./brands'))

export default [
  <Route
    path="brands"
    element={<BrandsPage />}
  ></Route>,
]
