import { useDeleteWarehouseMutate } from 'entities/warehouse/api/queries/use-delete-warehouse-mutate'
import { useNotification } from 'shared/notification'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { DeleteState } from 'shared/ui/dialog/confirm-delete'

export function useDeleteWarehouse() {
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

  return {
    handleConfirmDelete,
  }
}
