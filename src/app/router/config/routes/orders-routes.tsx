import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import OrdersPage from 'pages/order/orders-page'
import OrderCreatePage from 'pages/order/order-create-page'
import OrderDetailsPage from 'pages/order/order-details-page'

export const ordersRoutes = {
  [AppRoutes.Orders]: {
    path: 'orders',
    element: (
      <RouterPage>
        <OrdersPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.OrderCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <OrderCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.OrderDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <OrderDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}
