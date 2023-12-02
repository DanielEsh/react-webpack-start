import { AttributesDataTable } from 'entities/attributes/ui/data-table/attributes-data-table'
import { AttributesDataTableHeader } from 'entities/attributes/ui/data-table/attributes-data-table-header'
// import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
// import { useEffect } from 'react'
import { useGetAttributes } from 'entities/attributes/api/queries/use-get-attributes'
import { Outlet } from 'react-router-dom'
import { DataViewState } from 'widgets/data-view'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
import { useEffect, useState } from 'react'
import { Breadcrumbs } from 'shared/ui-kit'

const AttiributesPage = () => {
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

  const { isLoading, isError, data } = useGetAttributes({
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
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Атрибуты</Breadcrumbs.Item>
      </Breadcrumbs>

      <AttributesDataTableHeader />

      {isError && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <AttributesDataTable
          data={data?.content}
          defaultDataTableValues={tableValues}
          meta={data.meta}
          onChange={handleChange}
        />
      )}

      <Outlet />
    </div>
  )
}

export default AttiributesPage
