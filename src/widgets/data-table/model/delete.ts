import { createEvent, createStore, sample } from 'effector'

interface DeleteState<KEY extends number | string, DATA> {
  key: KEY
  data: DATA
}

type DeleteStateStore = DeleteState<number | string, unknown> | null

export const setDeletedItem =
  createEvent<DeleteState<number | string, unknown>>()

export const $deletedStore = createStore<DeleteStateStore>(null)

export const toggleDeleteConfirmDialog = createEvent<boolean>()
export const $deleteConfirmDialogVisible = createStore<boolean>(false)

export const openDeleteConfirmDialog = <KEY extends number | string, DATA>(
  data: DeleteState<KEY, DATA>,
) => {
  setDeletedItem(data)
  toggleDeleteConfirmDialog(true)
}

sample({
  clock: setDeletedItem,
  target: $deletedStore,
})

sample({
  clock: toggleDeleteConfirmDialog,
  target: $deleteConfirmDialogVisible,
})
