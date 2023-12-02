import { Row } from '@tanstack/react-table'
import { ButtonLink } from 'shared/ui-kit/button-link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { BrandDto } from 'entities/brands/api/types'

interface Props {
  row: Row<BrandDto>
}

export const BrandsDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, BrandDto>({
      key: original.id,
      data: original,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <ButtonLink
        size="sm"
        to={`/brands/${original.slug}`}
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
