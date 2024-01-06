import { Outlet } from 'react-router-dom'
import { Breadcrumbs } from 'shared/ui-kit'
import { WarehouseTableHeader, WarehouseDataTable } from 'entities/warehouse'

export default function WarehousesPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Склад</Breadcrumbs.Item>
      </Breadcrumbs>

      <WarehouseTableHeader />
      <WarehouseDataTable />
      <Outlet />
    </div>
  )
}
