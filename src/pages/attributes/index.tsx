import { lazy } from 'react'
import { Route } from 'react-router-dom'

export const AttributesPage = lazy(() => import('./attributes-page'))
export const AttributeCreatePage = lazy(() => import('./attribute-create-page'))
export const AttributeDetailsPage = lazy(
  () => import('./attribute-details-page'),
)

export default [
  <Route
    path="attributes"
    element={<AttributesPage />}
  >
    <Route
      path="create"
      element={<AttributeCreatePage />}
    />
    <Route
      path=":id"
      element={<AttributeDetailsPage />}
    />
  </Route>,
]
