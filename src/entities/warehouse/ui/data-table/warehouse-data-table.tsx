import { warehouseDataTableColumns } from './warehouse-data-table-columns'
import { useGetWarehouses } from 'entities/warehouse/api/queries/use-get-warehouses'
import { ConfirmDeleteDialog } from 'shared/ui/dialog/confirm-delete'
import { useDataTableViewState } from 'widgets/data-table-view/use-data-table-view-state'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { useDeleteWarehouse } from 'features/warehouse/delete'

export const WarehouseDataTable = () => {
  const { state, changePage, changeLimit, changeSort } = useDataTableViewState()
  const { isLoading, isError, data } = useGetWarehouses(state)
  const { handleConfirmDelete } = useDeleteWarehouse()

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <DataTableView
            data={data}
            columns={warehouseDataTableColumns}
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
