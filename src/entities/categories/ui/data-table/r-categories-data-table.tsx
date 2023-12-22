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

  const handlePageChange = (currentPage: number) => {
    console.log('page', currentPage)
  }

  const handleLimitChange = (limit: number) => {
    console.log('limit', limit)
  }

  const handleSortChange = (sort: any) => {
    console.log('sort', sort)
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <DataTableView
          data={data}
          columns={columns}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
          onSortChange={handleSortChange}
        />
      )}
    </>
  )
}
