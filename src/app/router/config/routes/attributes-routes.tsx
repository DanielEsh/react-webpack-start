import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import {
  AttributeCreatePage,
  AttributeDetailsPage,
  AttributesPage,
} from 'pages/attributes'

export const attributesRoutes = {
  [AppRoutes.Attributes]: {
    path: 'attributes',
    element: (
      <RouterPage>
        <AttributesPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.AttributeCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <AttributeCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.AttributeDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <AttributeDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}
