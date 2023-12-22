import { useGetCategories } from 'entities/categories/api/queries'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { columns } from './columns'
import { useDataTableViewState } from 'widgets/data-table-view/use-data-table-view-state'

export const CategoriesDataTable = () => {
  const { state, changePage, changeLimit, changeSort } = useDataTableViewState()
  const { isLoading, isError, data } = useGetCategories(state)

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <DataTableView
          data={data}
          columns={columns}
          sorting={{ sortBy: state.sort_by, orderBy: state.order_by }}
          onPageChange={changePage}
          onLimitChange={changeLimit}
          onSortChange={changeSort}
        />
      )}
    </>
  )
}
