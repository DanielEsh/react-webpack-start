import { Row } from '@tanstack/react-table'
// import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { ProductDto } from 'entities/products/api'
import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { DataTableRowButtons } from 'shared/ui/data-table/data-table-row-actions'

interface Props {
  row: Row<ProductDto>
}

export const ProductsDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    openDeleteConfirmDialog<number, ProductDto>({
      key: original.id,
      data: original,
    })
  }

  return (
    <DataTableRowButtons
      link={`/products/${original.id}`}
      onDeleteClick={handleDeleteClick}
    />
  )
}
