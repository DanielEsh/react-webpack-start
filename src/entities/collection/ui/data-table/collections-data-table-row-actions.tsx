import { Row } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
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
      <div className="">
        <Link
          className="inline-flex h-9 w-9 items-center justify-center"
          to={`/collections/${id}`}
        >
          <IconEdit />
        </Link>
      </div>

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
