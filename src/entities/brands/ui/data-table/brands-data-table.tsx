import { brandsDataTableColumns } from './brands-data-table-columns'
import {
  ConfirmDeleteDialog,
  type DeleteState,
} from 'shared/ui/dialog/confirm-delete'
// import { useInvalidateBrands } from 'entities/brands/api/queries/useInvalidateBrands'
// import { useNotification } from 'shared/notification'
import { PaginatedDataView } from 'widgets/data-view/paginated-data-view'
import { DataTableState } from 'widgets/data-table/model'
import { BrandDto } from 'entities/brands/api/types'

interface Props {
  data: BrandDto[]
  totalPages: number
  onChange?(state: DataTableState): void
}

export const BrandsDataTable = ({ data, totalPages, onChange }: Props) => {
  //   const { mutate: deleteCategoryMutation } = useDeleteCategoryMutation()
  //   const { invalidateBrands } = useInvalidateBrands()
  //   const { showNotification } = useNotification()

  //   const handleSuccessCategoryDelete = (data: BrandDto) => {
  //     console.log('success delete', data)
  //     showNotification({
  //       id: '0',
  //       title: 'Успешное удаление',
  //       message: `message`,
  //     })
  //     invalidateBrands()
  //   }

  const handleConfirmDelete = (data: DeleteState<number, BrandDto>) => {
    console.log('DELETE', data)
    // deleteCategoryMutation(data.key, {
    //   onSuccess: handleSuccessCategoryDelete,
    // })
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
