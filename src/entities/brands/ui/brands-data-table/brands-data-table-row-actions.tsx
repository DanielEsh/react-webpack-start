import { ButtonLink } from 'shared/ui-kit/button-link'
import { Button } from 'shared/ui-kit/button'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { BrandDto } from 'entities/brands/api/types'

interface Props {
  brand: BrandDto
}

export const BrandsDataTableRowActions = ({ brand }: Props) => {
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, BrandDto>({
      key: brand.id,
      data: brand,
    })
  }

  return (
    <div className="flex justify-end gap-1">
      <ButtonLink
        size="sm"
        to={`/brands/${brand.id}`}
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
