import { Row } from '@tanstack/react-table'
import { ButtonLink } from 'shared/ui-kit/button-link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { AttributeDto } from 'entities/attributes/api'

interface Props {
  row: Row<AttributeDto>
}

export const AttributesDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, AttributeDto>({
      key: original.id,
      data: original,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <ButtonLink
        size="sm"
        to={`/attributes/${original.id}`}
      >
        <IconEdit />
      </ButtonLink>

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
