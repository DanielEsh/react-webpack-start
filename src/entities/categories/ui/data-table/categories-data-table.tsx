import { Dialog } from 'shared/ui-kit/dialog'
import { Category } from 'entities/categories/types'
import { columns } from './columns'
import { useDeleteConfirmation } from 'widgets/data-table/use-delete-confirmation'
import { DeleteState } from 'widgets/data-table/model/delete'
import {
  useDeleteCategoryMutation,
  useInvalidateCategories,
} from 'entities/categories/api/queries'
import { useNotification } from 'shared/notification'
import { PaginatedDataView } from 'widgets/data-view/paginated-data-view'

interface Props {
  data: Category[]
  totalPages: number
  onChange?(): void
}

export const CategoriesDataTable = ({ data, totalPages }: Props) => {
  const {
    deleteConfirmDialogVisible,
    closeDeleteConfirmDialog,
    confirmDelete,
  } = useDeleteConfirmation()
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
      />

      <Dialog
        opened={deleteConfirmDialogVisible}
        onClose={closeDeleteConfirmDialog}
        onConfirm={() => confirmDelete(handleConfirmDelete)}
      />
    </>
  )
}
