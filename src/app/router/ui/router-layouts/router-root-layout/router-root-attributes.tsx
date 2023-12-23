import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { RouterPage } from 'app/router/ui/router-page'

export const AttributesPage = lazy(
  () => import('pages/attributes/attributes-page'),
)
export const AttributeCreatePage = lazy(
  () => import('pages/attributes/attribute-create-page'),
)
export const AttributeDetailsPage = lazy(
  () => import('pages/attributes/attribute-details-page'),
)

export const attributesRoutes = [
  <Route
    path="attributes"
    element={
      <RouterPage isPrivate>
        <AttributesPage />
      </RouterPage>
    }
  >
    <Route
      path="create"
      element={
        <RouterPage isPrivate>
          <AttributeCreatePage />
        </RouterPage>
      }
    />
    <Route
      path=":id"
      element={
        <RouterPage isPrivate>
          <AttributeDetailsPage />
        </RouterPage>
      }
    />
  </Route>,
]
