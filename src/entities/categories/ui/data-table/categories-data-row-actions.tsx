import { Row } from '@tanstack/react-table'
import { ButtonLink } from 'shared/ui-kit/button-link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { Category } from 'entities/categories/types'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'

interface Props {
  row: Row<Category>
}

export const CategoriesDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, Category>({
      key: original.id,
      data: original,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <ButtonLink
        size="sm"
        to={`/categories/${original.slug}`}
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
