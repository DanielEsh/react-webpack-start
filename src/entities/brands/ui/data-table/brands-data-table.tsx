import { brandsDataTableColumns } from './brands-data-table-columns'
import {
  ConfirmDeleteDialog,
  type DeleteState,
} from 'shared/ui/dialog/confirm-delete'
import { PaginatedDataView } from 'widgets/data-view/paginated-data-view'
import { DataTableState } from 'widgets/data-table/model'
import { BrandDto } from 'entities/brands/api/types'
import {
  useDeleteBrandMutation,
  useInvalidateBrands,
} from 'entities/brands/api/queries'
import { useNotification } from 'shared/notification'

interface Props {
  data: BrandDto[]
  totalPages: number
  onChange?(state: DataTableState): void
}

export const BrandsDataTable = ({ data, totalPages, onChange }: Props) => {
  const { mutate: deleteCategoryMutation } = useDeleteBrandMutation()
  const { invalidateBrands } = useInvalidateBrands()
  const { showNotification } = useNotification()

  const handleSuccessBrandDelete = (data: BrandDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное удаление',
      message: `message`,
    })
    invalidateBrands()
  }

  const handleConfirmDelete = (data: DeleteState<number, BrandDto>) => {
    deleteCategoryMutation(data.key, {
      onSuccess: handleSuccessBrandDelete,
    })
  }

  return (
    <>
      <PaginatedDataView
        data={data}
        columns={brandsDataTableColumns}
        meta={{ totalPages }}
        onChange={onChange}
      />

      <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
    </>
  )
}
