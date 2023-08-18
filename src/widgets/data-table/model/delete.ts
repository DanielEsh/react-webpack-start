import { createEvent, createStore, sample } from 'effector'

export interface DeleteState<KEY extends number | string, DATA> {
  /** ключ для удаления */
  key: KEY
  data: DATA
}

type DeleteStateStore = DeleteState<number | string, unknown> | null

export const setDeletedItem = createEvent<DeleteStateStore>()

export const $deletedStore = createStore<DeleteStateStore>(null)

export const toggleDeleteConfirmDialog = createEvent<boolean>()
export const $deleteConfirmDialogVisible = createStore<boolean>(false)

sample({
  clock: setDeletedItem,
  target: $deletedStore,
})

sample({
  clock: toggleDeleteConfirmDialog,
  target: $deleteConfirmDialogVisible,
})
