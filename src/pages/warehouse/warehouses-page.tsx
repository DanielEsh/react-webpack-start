import { Outlet } from 'react-router-dom'
import { WarehouseTable } from 'entities/warehouse/ui/warehouse-table/warehouse-table'

export default function WarehousesPage() {
  return (
    <div>
      <span>Warehouses</span>

      <WarehouseTable />
      <Outlet />
    </div>
  )
}
