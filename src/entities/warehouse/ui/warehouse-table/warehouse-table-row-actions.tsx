import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { DataTableRowButtons } from 'widgets/data-table/data-table-row-actions'
import { Row } from '@tanstack/react-table'
import { WarehouseDto } from 'entities/warehouse/api/dto'

interface Props {
  row: Row<WarehouseDto>
}

export const WarehouseTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, WarehouseDto>({
      key: original.id,
      data: original,
    })
  }

  return (
    <DataTableRowButtons
      link={`/warehouses/${original.id}`}
      onDeleteClick={handleDeleteClick}
    />
  )
}
