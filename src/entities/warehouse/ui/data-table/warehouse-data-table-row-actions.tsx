import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { DataTableRowButtons } from 'shared/ui/data-table/data-table-row-actions'
import { WarehouseDto } from 'entities/warehouse/api/dto'

interface Props {
  warehouse: WarehouseDto
}

export const WarehouseDataTableRowActions = ({ warehouse }: Props) => {
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, WarehouseDto>({
      key: warehouse.id,
      data: warehouse,
    })
  }

  return (
    <DataTableRowButtons
      link={`/warehouses/${warehouse.id}`}
      onDeleteClick={handleDeleteClick}
    />
  )
}
