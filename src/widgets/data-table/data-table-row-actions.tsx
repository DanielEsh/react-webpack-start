import { ButtonLink } from 'shared/ui-kit/button-link'
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
      <ButtonLink
        size="sm"
        to={link}
      >
        <IconEdit />
      </ButtonLink>

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
