import { Outlet } from 'react-router-dom'
import { OrdersDataTable } from 'entities/order/ui/order-data-table/orders-data-table'

export default function OrdersPage() {
  return (
    <div>
      <OrdersDataTable />

      <Outlet />
    </div>
  )
}
