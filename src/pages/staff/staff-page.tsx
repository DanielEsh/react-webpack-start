import { Outlet } from 'react-router-dom'
import { StaffDataTable } from 'entities/staff/ui/staff-data-table/staff-data-table'

export default function StaffPage() {
  return (
    <div>
      <StaffDataTable />

      <Outlet />
    </div>
  )
}
