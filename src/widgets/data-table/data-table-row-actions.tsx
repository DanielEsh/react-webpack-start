import { Link } from 'shared/ui-kit/link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'

interface Props {
  link: string
  onDeleteClick(): void
}

export const DataTableRowButtons = ({ link, onDeleteClick }: Props) => {
  return (
    <div className="flex justify-end gap-1">
      <Link
        size="sm"
        to={link}
      >
        <IconEdit />
      </Link>

      <Button
        variant="ghost"
        size="sm"
        onClick={onDeleteClick}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
