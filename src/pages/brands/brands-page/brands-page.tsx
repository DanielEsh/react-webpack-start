import { Outlet } from 'react-router-dom'
import { BrandsDataTable, BrandsDataTableHeader } from 'entities/brands'
import { Breadcrumbs } from 'shared/ui-kit'

export default function BrandsPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Бренды</Breadcrumbs.Item>
      </Breadcrumbs>

      <BrandsDataTableHeader />
      <BrandsDataTable />

      <Outlet />
    </div>
  )
}
