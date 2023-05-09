import { Row } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from 'shared/ui/Button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { Collection } from '../types'

interface Props {
  row: Row<Collection>
  onDeleteClick: (id: number) => void
}

export const CollectionsTableActions = ({ row, onDeleteClick }: Props) => {
  const { id } = row.original

  return (
    <div className="flex justify-end gap-1">
      <div className="">
        <Link
          className="inline-flex items-center justify-center px-4 py-2"
          to={`/collections/${id}`}
        >
          <IconEdit />
        </Link>
      </div>

      <Button
        variant="ghost"
        onClick={() => onDeleteClick(id)}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
