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
import { DataTableState } from 'widgets/data-table/model'

interface Props {
  data: Category[]
  totalPages: number
  onChange?(state: DataTableState): void
}

export const CategoriesDataTable = ({ data, totalPages, onChange }: Props) => {
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
    console.log('DELETE', data)
    deleteCategoryMutation(data.key, {
      onSuccess: handleSuccessCategoryDelete,
    })
  }

  return (
    <>
      <PaginatedDataView
        data={data}
        columns={columns}
        meta={{ totalPages }}
        onChange={onChange}
      />

      <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
    </>
  )
}
