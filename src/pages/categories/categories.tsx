import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'
import { useGetCategories } from 'entities/categories/api/queries'
import {
  $dataTableStore,
  type DataTableState,
  type RowsPerPagesValues,
  setDataTableValues,
} from 'widgets/data-table/model'
import { useStore } from 'effector-react'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
import { useEffect } from 'react'

const CategoriesPage = () => {
  const values = useStore($dataTableStore)

  const { setQueryParams, getQueryParams } = useSyncWithQueryParams()

  useEffect(() => {
    const queryParams = getQueryParams()
    if (Object.keys(queryParams).length) {
      setDataTableValues({
        currentPage: Number(queryParams.currentPage),
        limit: +queryParams.limit as unknown as RowsPerPagesValues,
        ...queryParams,
      })
    }
  }, [])

  const { isLoading, isError, data } = useGetCategories({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 5,
    sort_by: values.sortBy ? [values.sortBy] : [],
    order_by: values.orderBy ? [values.orderBy] : [],
  })

  const handleChange = (state: DataTableState) => {
    console.log('values', state)
    setQueryParams(state)
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
