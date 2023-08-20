import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'
import { useGetCategories } from 'entities/categories/api/queries'
import { $dataTableStore, DataTableState } from 'widgets/data-table/model'
import { useStore } from 'effector-react'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'

const CategoriesPage = () => {
  const values = useStore($dataTableStore)

  const { sync } = useSyncWithQueryParams()

  const { isLoading, isError, data } = useGetCategories({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 5,
    sort_by: [values.sortBy ?? 'id'],
    order_by: [values.orderBy ?? 'asc'],
  })

  const handleChange = (state: DataTableState) => {
    console.log('values', state)
    sync(state)
  }

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
            onChange={handleChange}
          />
        )}

        <Outlet />
      </div>
    </div>
  )
}

export default CategoriesPage
