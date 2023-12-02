import { brandsDataTableColumns } from './brands-data-table-columns'
import {
  ConfirmDeleteDialog,
  type DeleteState,
} from 'shared/ui/dialog/confirm-delete'
import { BrandDto } from 'entities/brands/api/types'
import {
  useDeleteBrandMutation,
  useInvalidateBrands,
} from 'entities/brands/api/queries'
import { useNotification } from 'shared/notification'
import { type DataViewState, PaginatedDataView } from 'widgets/data-view'

interface Props {
  data: BrandDto[]
  defaultDataTableValues: DataViewState
  meta: any
  onChange?(state: DataViewState): void
}

export const BrandsDataTable = ({
  data,
  meta,
  defaultDataTableValues,
  onChange,
}: Props) => {
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
        meta={meta}
        defaultValues={defaultDataTableValues}
        onChange={onChange}
      />

      <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
    </>
  )
}
