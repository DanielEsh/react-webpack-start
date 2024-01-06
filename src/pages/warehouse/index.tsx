import { lazy } from 'react'

export const WarehousesPage = lazy(() => import('./warehouses-page'))
export const WarehouseCreatePage = lazy(() => import('./warehouse-create-page'))
export const WarehouseDetailsPage = lazy(
  () => import('./warehouse-details-page'),
)
