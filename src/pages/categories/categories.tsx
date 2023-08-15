import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'

const CategoriesPage = () => {
  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        <CategoriesDataTableHeader />
        <CategoriesDataTable data={[]} />

        <Outlet />
      </div>
    </div>
  )
}

export default CategoriesPage
