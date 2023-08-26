import { Outlet } from 'react-router-dom'
import { useGetBrands } from 'entities/brands/api/queries/use-get-brands'
import { BrandsDataTable } from 'entities/brands/ui/data-table/brands-data-table'
import { BrandsDataTableHeader } from 'entities/brands/ui/data-table/brands-data-table-header'
import {
  $dataTableStore,
  DataTableState,
  RowsPerPagesValues,
  setDataTableValues,
} from 'widgets/data-table/model'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
import { useEffect } from 'react'
import { useStore } from 'effector-react'

const BrandsPage = () => {
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

  const { isLoading, isError, data } = useGetBrands({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 10,
    sort_by: [],
    order_by: [],
  })

  const handleChange = (state: DataTableState) => {
    console.log('values', state)
    setQueryParams(state)
  }

  return (
    <div>
      <pre>
        <code>Breadcrumbs</code>
      </pre>

      <BrandsDataTableHeader />

      {isError && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <BrandsDataTable
          data={data?.content}
          totalPages={data.meta.pagination.totalPages}
          onChange={handleChange}
        />
      )}

      <Outlet />
    </div>
  )
}

export default BrandsPage
