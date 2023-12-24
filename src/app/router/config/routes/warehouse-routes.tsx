import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import WarehousesPage from 'pages/warehouse/warehouses-page'
import WarehouseCreatePage from 'pages/warehouse/warehouse-create-page'
import WarehouseDetailsPage from 'pages/warehouse/warehouse-details-page'

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
