import { Suspense } from 'react'
import { Route } from 'react-router-dom'
import WarehousesPage from './warehouses-page'
import WarehouseCreatePage from './warehouse-create-page'
import WarehouseDetailsPage from './warehouse-details-page'

export default [
  <Route
    path="warehouses"
    element={
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <WarehousesPage />
      </Suspense>
    }
  >
    <Route
      path="create"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <WarehouseCreatePage />
        </Suspense>
      }
    />

    <Route
      path=":id"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <WarehouseDetailsPage />
        </Suspense>
      }
    />
  </Route>,
]
