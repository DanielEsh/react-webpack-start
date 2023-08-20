import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'
import { useGetCategories } from 'entities/categories/api/queries'
import { $dataTableStore } from 'widgets/data-table/model'
import { useStore } from 'effector-react'

const CategoriesPage = () => {
  const values = useStore($dataTableStore)
  const { isLoading, isError, data } = useGetCategories({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 5,
    sort_by: [values.sortBy ?? 'id'],
    order_by: [values.orderBy ?? 'asc'],
  })

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        <CategoriesDataTableHeader />

        {isError && <div>Error...</div>}
        {isLoading && <div>Loading...</div>}
        {data && (
          <CategoriesDataTable
            data={data?.data}
            totalPages={data.meta.pagination.totalPages}
          />
        )}

        <Outlet />
      </div>
    </div>
  )
}

export default CategoriesPage
