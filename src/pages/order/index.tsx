import { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

const OrdersPage = lazy(() => import('./orders-page'))
const OrderCreatePage = lazy(() => import('./order-create-page'))
const OrderDetailsPage = lazy(() => import('./order-details-page'))
export default [
  <Route path="orders">
    <Route
      index
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <OrdersPage />
        </Suspense>
      }
    />

    <Route
      path="create"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <OrderCreatePage />
        </Suspense>
      }
    />

    <Route
      path=":id"
      element={
        <Suspense fallback={<div>PAGE LOADER...</div>}>
          <OrderDetailsPage />
        </Suspense>
      }
    />
  </Route>,
]
