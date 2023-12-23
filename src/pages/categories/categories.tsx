import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'
import { Breadcrumbs } from 'shared/ui-kit'

const CategoriesPage = () => {
  return (
    <div>
      <div>
        <Breadcrumbs>
          <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
          <Breadcrumbs.Item isLast>Категории</Breadcrumbs.Item>
        </Breadcrumbs>

        <CategoriesDataTableHeader />
        <CategoriesDataTable />

        <Outlet />
      </div>
    </div>
  )
}

export default CategoriesPage
