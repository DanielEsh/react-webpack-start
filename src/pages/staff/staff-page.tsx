import { Outlet } from 'react-router-dom'
import { StaffDataTable } from 'entities/staff/ui/staff-data-table/staff-data-table'
import { Breadcrumbs } from 'shared/ui-kit'

export default function StaffPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Сотрудники</Breadcrumbs.Item>
      </Breadcrumbs>
      <StaffDataTable />

      <Outlet />
    </div>
  )
}
