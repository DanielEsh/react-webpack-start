import { Outlet } from 'react-router-dom'
import { WarehouseTable } from 'entities/warehouse/ui/warehouse-table/warehouse-table'
import { Breadcrumbs } from 'shared/ui-kit'

export default function WarehousesPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Склад</Breadcrumbs.Item>
      </Breadcrumbs>

      <WarehouseTable />
      <Outlet />
    </div>
  )
}
