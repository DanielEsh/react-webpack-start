import { DataTable } from 'widgets/data-table'
import { Dialog } from 'shared/ui-kit/dialog'
import { Category } from 'entities/categories/types'
import { columns } from './columns'
import { useDeleteConfirmation } from 'widgets/data-table/use-delete-confirmation'
import { DeleteState } from 'widgets/data-table/model/delete'
import {
  useDeleteCategoryMutation,
  useUpdateCategories,
} from 'entities/categories/api/queries'
import { useNotification } from 'shared/notification'

interface Props {
  data: Category[]
  onChange?(): void
}

export const CategoriesDataTable = ({ data }: Props) => {
  const {
    deleteConfirmDialogVisible,
    closeDeleteConfirmDialog,
    confirmDelete,
  } = useDeleteConfirmation()
  const { mutate: deleteCategoryMutation } = useDeleteCategoryMutation()
  const { updateCategories } = useUpdateCategories()
  const { showNotification } = useNotification()

  const handleSuccessCategoryDelete = (data: Category) => {
    console.log('success delete', data)
    showNotification({
      id: '0',
      title: 'Успешное удаление',
      message: `message`,
    })
    updateCategories()
  }

  const handleConfirmDelete = (data: DeleteState<number, Category>) => {
    console.log('DELETE', data)
    deleteCategoryMutation(data.key, {
      onSuccess: handleSuccessCategoryDelete,
    })
  }

  return (
    <>
      <DataTable<Category>
        data={data}
        columns={columns}
      />

      <Dialog
        opened={deleteConfirmDialogVisible}
        onClose={closeDeleteConfirmDialog}
        onConfirm={() => confirmDelete(handleConfirmDelete)}
      />
    </>
  )
}
