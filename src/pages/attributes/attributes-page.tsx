import { AttributesDataTable } from 'entities/attributes/ui/data-table/attributes-data-table'
import { AttributesDataTableHeader } from 'entities/attributes/ui/data-table/attributes-data-table-header'
import {
  $dataTableStore,
  DataTableState,
  RowsPerPagesValues,
  setDataTableValues,
} from 'widgets/data-table/model'
import { useStore } from 'effector-react'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
import { useEffect } from 'react'
import { useGetAttributes } from 'entities/attributes/api/queries/use-get-attributes'
import { Outlet } from 'react-router-dom'

const AttiributesPage = () => {
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

  const { isLoading, isError, data } = useGetAttributes({
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

      <AttributesDataTableHeader />

      {isError && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <AttributesDataTable
          data={data?.content}
          totalPages={data.meta.pagination.totalPages}
          onChange={handleChange}
        />
      )}

      <Outlet />
    </div>
  )
}

export default AttiributesPage
