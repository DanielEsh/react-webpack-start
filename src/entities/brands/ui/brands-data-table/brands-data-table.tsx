import { brandsDataTableColumns } from './brands-data-table-columns'
import { ConfirmDeleteDialog } from 'shared/ui/dialog/confirm-delete'
import { useGetBrandsQuery } from 'entities/brands/api/queries'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { useDataTableViewState } from 'widgets/data-table-view/use-data-table-view-state'
import { useBrandDelete } from 'features/brands/delete'

export const BrandsDataTable = () => {
  const { state, changePage, changeLimit, changeSort } = useDataTableViewState()
  const { isLoading, isError, data } = useGetBrandsQuery(state)
  const { handleConfirmDelete } = useBrandDelete()

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <DataTableView
            data={data}
            columns={brandsDataTableColumns}
            sorting={{ sortBy: state.sortBy, orderBy: state.orderBy }}
            onPageChange={changePage}
            onLimitChange={changeLimit}
            onSortChange={changeSort}
          />

          <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
        </>
      )}
    </>
  )
}
