import { Row } from '@tanstack/react-table'
import { Link } from 'shared/ui-kit/link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { Category } from 'entities/categories/types'
import { openDeleteConfirmDialog } from 'widgets/data-table/model/delete'

interface Props {
  row: Row<Category>
}

export const CategoriesDataTableRowActions = ({ row }: Props) => {
  const { original } = row

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<string, Category>({
      key: original.slug,
      data: original,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <Link
        size="sm"
        to={`/categories/${original.slug}`}
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
