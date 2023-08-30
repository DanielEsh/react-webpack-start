import { Outlet } from 'react-router-dom'
import { useGetBrands } from 'entities/brands/api/queries/use-get-brands'
import { BrandsDataTable } from 'entities/brands/ui/data-table/brands-data-table'
import { BrandsDataTableHeader } from 'entities/brands/ui/data-table/brands-data-table-header'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
import { useEffect, useState } from 'react'
import type { DataViewState } from 'widgets/data-view'

const BrandsPage = () => {
  const [tableValues, setTableValues] = useState<DataViewState>({
    page: 1,
    limit: 10,
    sortBy: null,
    orderBy: null,
  })

  const { setQueryParams, getQueryParams } = useSyncWithQueryParams()

  useEffect(() => {
    const queryParams = getQueryParams()
    if (Object.keys(queryParams).length) {
      setTableValues({
        page: +queryParams.currentPage,
        limit: +queryParams.limit,
        ...queryParams,
      })
    }
  }, [])

  const { isLoading, isError, data } = useGetBrands({
    page: tableValues.page ?? 1,
    limit: tableValues.limit ?? 10,
    sort_by: tableValues.sortBy ? [tableValues.sortBy] : [],
    order_by: tableValues.orderBy ? [tableValues.orderBy] : [],
  })

  const handleChange = (state: DataViewState) => {
    setTableValues(state)
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
          defaultDataTableValues={tableValues}
          totalPages={data.meta.pagination.totalPages}
          onChange={handleChange}
        />
      )}

      <Outlet />
    </div>
  )
}

export default BrandsPage
