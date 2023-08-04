import { Row } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from 'shared/ui-kit/Button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { Collection } from 'entities/collection/types'

interface Props {
  row: Row<Collection>
  onDelete: (deletedId: number) => void
}

export const CollectionsDataTableRowActions = ({ row, onDelete }: Props) => {
  const { id } = row.original

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
        onClick={() => onDelete(id)}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
