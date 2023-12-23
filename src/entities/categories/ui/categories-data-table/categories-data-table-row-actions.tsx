import { ButtonLink, Button } from 'shared/ui-kit'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { Category } from '../../types'
interface Props {
  category: Category
}

export const CategoriesDataTableRowActions = ({ category }: Props) => {
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, Category>({
      key: category.id,
      data: category,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <ButtonLink
        size="sm"
        to={`/categories/${category.id}`}
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
