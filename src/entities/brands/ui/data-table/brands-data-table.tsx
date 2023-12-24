import { brandsDataTableColumns } from './brands-data-table-columns'
import {
  ConfirmDeleteDialog,
  type DeleteState,
} from 'shared/ui/dialog/confirm-delete'
import { BrandDto } from 'entities/brands/api/types'
import {
  useDeleteBrandMutation,
  useGetBrands,
  useInvalidateBrands,
} from 'entities/brands/api/queries'
import { useNotification } from 'shared/notification'
import { DataTableView } from 'widgets/data-table-view/data-table-view'
import { useDataTableViewState } from 'widgets/data-table-view/use-data-table-view-state'

export const BrandsDataTable = () => {
  const { state, changePage, changeLimit, changeSort } = useDataTableViewState()
  const { isLoading, isError, data } = useGetBrands(state)

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
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <DataTableView
            data={data}
            columns={brandsDataTableColumns}
            sorting={{ sortBy: state.sortBy, orderBy: state.orderBy }}
            onPageChange={changePage}
            onLimitChange={changeLimit}
            onSortChange={changeSort}
          />

          <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
        </>
      )}
    </>
  )
}
