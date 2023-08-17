import { Row } from '@tanstack/react-table'
import { Link } from 'shared/ui-kit/link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { Category } from 'entities/categories/types'

interface Props {
  row: Row<Category>
}

export const CategoriesDataTableRowActions = ({ row }: Props) => {
  const { id } = row.original

  const handleDeleteClick = () => {
    console.log('delete', id)
  }

  return (
    <div className="flex justify-end gap-1">
      <Link
        size="sm"
        to={`/categories/${id}`}
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
