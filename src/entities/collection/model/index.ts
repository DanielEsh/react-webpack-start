import { createEvent, createStore, sample } from 'effector'

type DeleteIdState = number | null

export const setDeleteId = createEvent<DeleteIdState>()
export const $deleteIdStore = createStore<DeleteIdState>(null)

export const toggleConfirmDialog = createEvent<boolean>()
export const $confirmDialogVisible = createStore<boolean>(false)

sample({
  clock: setDeleteId,
  target: $deleteIdStore,
})

sample({
  clock: toggleConfirmDialog,
  target: $confirmDialogVisible,
})

$deleteIdStore.watch((deleteId) => {
  console.log('WATCH', deleteId)
})
