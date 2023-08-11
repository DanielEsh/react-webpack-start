import { Row } from '@tanstack/react-table'
import { Link } from 'shared/ui-kit/link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { Collection } from 'entities/collection/types'
import { setDeleteId, toggleConfirmDialog } from 'entities/collection/model'

interface Props {
  row: Row<Collection>
}

export const CollectionsDataTableRowActions = ({ row }: Props) => {
  const { id } = row.original

  const handleDeleteClick = () => {
    setDeleteId(id)
    toggleConfirmDialog(true)
  }

  return (
    <div className="flex justify-end gap-1">
      <Link
        size="sm"
        to={`/collections/${id}`}
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
