import { Outlet } from 'react-router-dom'
import { CategoriesDataTableHeader } from 'entities/categories/ui/data-table/data-table-header'
import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'
import { useGetCategories } from 'entities/categories/api/queries'
import { useSyncWithQueryParams } from 'widgets/data-view/use-sync-query-string'
import { useEffect, useState } from 'react'
import { DataViewState } from 'widgets/data-view'
import { Breadcrumbs } from 'shared/ui-kit'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { RCategoriesDataTable } from 'entities/categories/ui/data-table/r-categories-data-table'

const CategoriesPage = () => {
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

  const { isLoading, isError, data } = useGetCategories({
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
      <div>
        <Breadcrumbs>
          <Breadcrumbs.Item to="/">Главная</Breadcrumbs.Item>
          <Breadcrumbs.Item isLast>Категории</Breadcrumbs.Item>
        </Breadcrumbs>

        <CategoriesDataTableHeader />

        {isError && <div>Error...</div>}
        {isLoading && <div>Loading...</div>}
        {data && (
          <>
            <CategoriesDataTable
              data={data?.content}
              defaultDataTableValues={tableValues}
              meta={data.meta}
              onChange={handleChange}
            />

            <RCategoriesDataTable />
          </>
        )}

        <Outlet />
      </div>
    </div>
  )
}

export default CategoriesPage
