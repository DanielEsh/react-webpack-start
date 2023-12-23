import { useGetCategories } from 'entities/categories'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { categoriesDataTableColumns } from './categories-data-table-columns'
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
          columns={categoriesDataTableColumns}
          sorting={{ sortBy: state.sortBy, orderBy: state.orderBy }}
          onPageChange={changePage}
          onLimitChange={changeLimit}
          onSortChange={changeSort}
        />
      )}
    </>
  )
}
