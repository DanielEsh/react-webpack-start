import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'
import { useGetCategories } from 'entities/categories/api/queries'

const CategoriesPage = () => {
  const { isLoading, isError, data } = useGetCategories()

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        <CategoriesDataTableHeader />

        {isLoading && <div>Error...</div>}
        {isLoading && <div>Loading...</div>}
        {data && <CategoriesDataTable data={data?.data} />}

        <Outlet />
      </div>
    </div>
  )
}

export default CategoriesPage
