import { useStore } from 'effector-react'
import {
  $deleteConfirmDialogVisible,
  $deletedStore,
  setDeletedItem,
  toggleDeleteConfirmDialog,
  type DeleteState,
} from './model'

export function useDeleteConfirmation() {
  const deletedStore = useStore($deletedStore)
  const deleteConfirmDialogVisible = useStore($deleteConfirmDialogVisible)

  const openDeleteConfirmDialog = <KEY extends number | string, DATA>(
    data: DeleteState<KEY, DATA>,
  ) => {
    setDeletedItem(data)
    toggleDeleteConfirmDialog(true)
  }

  const closeDeleteConfirmDialog = () => {
    setDeletedItem(null)
    toggleDeleteConfirmDialog(false)
  }

  const confirmDelete = <KEY extends number | string, DATA>(
    deleteFn: (data: DeleteState<KEY, DATA>) => void,
  ) => {
    deleteFn(deletedStore as DeleteState<KEY, DATA>)
    closeDeleteConfirmDialog()
  }

  return {
    deleteConfirmDialogVisible,
    openDeleteConfirmDialog,
    closeDeleteConfirmDialog,
    confirmDelete,
  }
}
