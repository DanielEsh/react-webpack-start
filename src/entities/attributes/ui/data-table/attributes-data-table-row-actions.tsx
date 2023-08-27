import { Row } from '@tanstack/react-table'
import { Link } from 'shared/ui-kit/link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { Attribute } from 'entities/attributes/types'

interface Props {
  row: Row<Attribute>
}

export const AttributesDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, Attribute>({
      key: original.id,
      data: original,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <Link
        size="sm"
        to={`/attributes/${original.id}`}
      >
        <IconEdit />
      </Link>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleDeleteClick}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
