import { warehouseColumns } from './warehouse-columns'
import { PaginatedDataView } from 'widgets/data-view'
import { WarehouseTableHeader } from './warehouse-table-header'
import { useGetWarehouses } from 'entities/warehouse/api/queries/use-get-warehouses'
import {
  ConfirmDeleteDialog,
  DeleteState,
} from 'shared/ui/dialog/confirm-delete'
import { useDeleteWarehouseMutate } from 'entities/warehouse/api/queries/use-delete-warehouse-mutate'
import { useNotification } from 'shared/notification'
import { WarehouseDto } from 'entities/warehouse/api/dto'

export const WarehouseTable = () => {
  const { isSuccess, data } = useGetWarehouses({
    page: 1,
    limit: 10,
    sort_by: [],
    order_by: [],
  })
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
    <div>
      <WarehouseTableHeader />

      {isSuccess && data.meta && (
        <PaginatedDataView
          data={data?.content ?? []}
          columns={warehouseColumns}
          meta={data?.meta}
        />
      )}

      <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
    </div>
  )
}
