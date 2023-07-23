import { Row } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from 'shared/ui-kit/Button'
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
          className="inline-flex h-[16px] w-[16px] items-center justify-center"
          to={`/collections/${id}`}
        >
          <IconEdit />
        </Link>
      </div>

      <Button
        className="h-[16px] w-[16px]"
        variant="ghost"
        onClick={() => onDeleteClick(id)}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
