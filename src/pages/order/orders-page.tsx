import { Outlet } from 'react-router-dom'
import { OrdersDataTable } from 'entities/order/ui/order-data-table/orders-data-table'
import { OrderDataTableHeader } from 'entities/order/ui/order-data-table/order-data-table-header'

export default function OrdersPage() {
  return (
    <div>
      <OrderDataTableHeader />
      <OrdersDataTable />

      <Outlet />
    </div>
  )
}
