import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { DataTableRowButtons } from 'shared/ui/data-table/data-table-row-actions'
import { Row } from '@tanstack/react-table'
import { StaffDto } from 'entities/staff/api/dto'

interface Props {
  row: Row<StaffDto>
}

export const StaffDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, StaffDto>({
      key: original.id,
      data: original,
    })
  }

  return (
    <DataTableRowButtons
      link={`/staff/${original.id}`}
      onDeleteClick={handleDeleteClick}
    />
  )
}
