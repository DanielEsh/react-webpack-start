import { Dialog } from 'shared/ui-kit/dialog'
import { useDeleteConfirmation } from './use-delete-confirmation'
import { DeleteState } from './model'

interface Props {
  onConfirmDelete(data: DeleteState<any, any>): void
}

export const ConfirmDeleteDialog = ({ onConfirmDelete }: Props) => {
  const {
    deleteConfirmDialogVisible,
    closeDeleteConfirmDialog,
    confirmDelete,
  } = useDeleteConfirmation()

  return (
    <Dialog
      opened={deleteConfirmDialogVisible}
      onClose={closeDeleteConfirmDialog}
      onConfirm={() => confirmDelete(onConfirmDelete)}
    />
  )
}
