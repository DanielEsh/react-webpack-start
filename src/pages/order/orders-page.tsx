import { Outlet } from 'react-router-dom'
import { OrdersDataTable } from 'entities/order/ui/order-data-table/orders-data-table'
import { OrderDataTableHeader } from 'entities/order/ui/order-data-table/order-data-table-header'
import { Breadcrumbs } from 'shared/ui-kit'

export default function OrdersPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Сотрудники</Breadcrumbs.Item>
      </Breadcrumbs>
      <OrderDataTableHeader />
      <OrdersDataTable />

      <Outlet />
    </div>
  )
}
