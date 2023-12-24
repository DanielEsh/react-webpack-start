import { Outlet } from 'react-router-dom'
import { Breadcrumbs } from 'shared/ui-kit'
import {
  CategoriesDataTableHeader,
  CategoriesDataTable,
} from 'entities/categories'

export default function CategoriesPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Категории</Breadcrumbs.Item>
      </Breadcrumbs>

      <CategoriesDataTableHeader />
      <CategoriesDataTable />

      <Outlet />
    </div>
  )
}
