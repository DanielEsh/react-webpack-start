import { Row } from '@tanstack/react-table'
// import { useDeleteConfirmation } from 'shared/ui/dialog/confirm-delete'
import { ProductDto } from 'entities/products/api'
import { DataTableRowButtons } from 'widgets/data-table/data-table-row-actions'

interface Props {
  row: Row<ProductDto>
}

export const ProductsDataTableRowActions = ({ row }: Props) => {
  const { original } = row
  //   const { openDeleteConfirmDialog } = useDeleteConfirmation()

  const handleDeleteClick = () => {
    // openDeleteConfirmDialog<number, ProductDto>({
    //   key: original.id,
    //   data: original,
    // })
    console.log('delete', original.id)
  }

  return (
    <DataTableRowButtons
      link={`/products/${original.id}`}
      onDeleteClick={handleDeleteClick}
    />
  )
}
