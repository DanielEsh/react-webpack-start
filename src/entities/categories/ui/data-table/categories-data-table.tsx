import { DataTable } from 'widgets/data-table'
import { Dialog } from 'shared/ui-kit/dialog'
import { Category } from 'entities/categories/types'
import { columns } from './columns'
import { useDeleteConfirmation } from 'widgets/data-table/use-delete-confirmation'
import { DeleteState } from 'widgets/data-table/model/delete'

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

  const handleConfirmDelete = (data: DeleteState<number, Category>) => {
    console.log('DELETE', data)
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
