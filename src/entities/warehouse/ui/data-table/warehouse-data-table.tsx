import { warehouseDataTableColumns } from './warehouse-data-table-columns'
import { useGetWarehouses } from 'entities/warehouse/api/queries/use-get-warehouses'
import {
  ConfirmDeleteDialog,
  DeleteState,
} from 'shared/ui/dialog/confirm-delete'
import { useDeleteWarehouseMutate } from 'entities/warehouse/api/queries/use-delete-warehouse-mutate'
import { useNotification } from 'shared/notification'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { useDataTableViewState } from 'widgets/data-table-view/use-data-table-view-state'
import { DataTableView } from 'widgets/data-table-view/data-table-view'

export const WarehouseDataTable = () => {
  const { state, changePage, changeLimit, changeSort } = useDataTableViewState()
  const { isLoading, isError, data } = useGetWarehouses(state)
  const { mutate: deleteWarehouseMutation } = useDeleteWarehouseMutate()
  const { showNotification } = useNotification()

  const handleSuccessDelete = (data: WarehouseDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное удаление',
      message: `message`,
    })
  }

  const handleConfirmDelete = (data: DeleteState<number, WarehouseDto>) => {
    deleteWarehouseMutation(data.key, {
      onSuccess: handleSuccessDelete,
    })
  }

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
