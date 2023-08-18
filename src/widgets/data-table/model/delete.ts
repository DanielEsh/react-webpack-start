import { createEvent, createStore, sample } from 'effector'

interface DeleteState<KEY extends number | string, DATA> {
  /** ключ для удаления */
  key: KEY
  data: DATA
}

type DeleteStateStore = DeleteState<number | string, unknown> | null

export const setDeletedItem =
  createEvent<DeleteState<number | string, unknown>>()

export const $deletedStore = createStore<DeleteStateStore>(null)

const toggleDeleteConfirmDialog = createEvent<boolean>()
export const $deleteConfirmDialogVisible = createStore<boolean>(false)

export const openDeleteConfirmDialog = <KEY extends number | string, DATA>(
  data: DeleteState<KEY, DATA>,
) => {
  setDeletedItem(data)
  toggleDeleteConfirmDialog(true)
}

export const closeDeleteConfirmDialog = () => {
  toggleDeleteConfirmDialog(false)
}

sample({
  clock: setDeletedItem,
  target: $deletedStore,
})

sample({
  clock: toggleDeleteConfirmDialog,
  target: $deleteConfirmDialogVisible,
})
