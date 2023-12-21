import { useGetCategories } from 'entities/categories/api/queries'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { columns } from './columns'

export const RCategoriesDataTable = () => {
  const { isLoading, isError, data } = useGetCategories({
    page: 1,
    limit: 10,
    sort_by: [],
    order_by: [],
  })

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <DataTableView
          data={data}
          columns={columns}
        />
      )}
    </>
  )
}
