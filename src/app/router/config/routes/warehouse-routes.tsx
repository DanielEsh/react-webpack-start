import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import {
  WarehousesPage,
  WarehouseCreatePage,
  WarehouseDetailsPage,
} from 'pages/warehouse'

export const warehouseRoutes = {
  [AppRoutes.Warehouses]: {
    path: 'warehouses',
    element: (
      <RouterPage>
        <WarehousesPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.WarehouseCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <WarehouseCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.WarehouseDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <WarehouseDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}
