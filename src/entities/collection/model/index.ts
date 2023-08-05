import { createEvent, createStore, sample, merge } from 'effector'

type DeleteIdState = number | null
export type RowsPerPagesValues = 5 | 10 | 25

export interface CollectionTableState {
  page?: number
  limit?: RowsPerPagesValues
  sortBy?: string
  orderBy?: string
}

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

const defaultCollectionTableValues: CollectionTableState = {
  page: 1,
  limit: 5,
  sortBy: 'id',
  orderBy: 'asc',
}

export const setCollectionTableValues = createEvent<CollectionTableState>()

export const $collectionTableStore = createStore<CollectionTableState>(
  defaultCollectionTableValues,
)

$collectionTableStore.on(setCollectionTableValues, (state, updatedValues) => {
  return { ...state, ...updatedValues }
})

$collectionTableStore.watch((state) => {
  console.log('STATE', state)
})
