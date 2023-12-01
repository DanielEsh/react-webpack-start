import { Category } from 'entities/categories/types'
import { columns } from './columns'
import {
  ConfirmDeleteDialog,
  type DeleteState,
} from 'shared/ui/dialog/confirm-delete'
import {
  useDeleteCategoryMutation,
  useInvalidateCategories,
} from 'entities/categories/api/queries'
import { useNotification } from 'shared/notification'
import { PaginatedDataView } from 'widgets/data-view/paginated-data-view'
import { DataViewState } from 'widgets/data-view'

interface Props {
  data: Category[]
  defaultDataTableValues: DataViewState
  meta: any
  onChange?(state: DataViewState): void
}

export const CategoriesDataTable = ({ data, meta, onChange }: Props) => {
  const { mutate: deleteCategoryMutation } = useDeleteCategoryMutation()
  const { invalidateCategories } = useInvalidateCategories()
  const { showNotification } = useNotification()

  const handleSuccessCategoryDelete = (data: Category) => {
    console.log('success delete', data)
    showNotification({
      id: '0',
      title: 'Успешное удаление',
      message: `message`,
    })
    invalidateCategories()
  }

  const handleConfirmDelete = (data: DeleteState<number, Category>) => {
    deleteCategoryMutation(data.key, {
      onSuccess: handleSuccessCategoryDelete,
    })
  }

  return (
    <>
      <PaginatedDataView
        data={data}
        columns={columns}
        meta={meta}
        onChange={onChange}
      />

      <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
    </>
  )
}
