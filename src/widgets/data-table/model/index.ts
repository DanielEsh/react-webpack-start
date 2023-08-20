import { createEvent, createStore } from 'effector'

export type RowsPerPagesValues = 10 | 20 | 40

export interface DataTableState {
  currentPage?: number
  limit?: RowsPerPagesValues
  sortBy?: string | null
  orderBy?: string | null
}

const defaultCollectionTableValues: DataTableState = {
  currentPage: 1,
  limit: 10,
}

export const setDataTableValues = createEvent<DataTableState>()

export const $dataTableStore = createStore<DataTableState>(
  defaultCollectionTableValues,
)

$dataTableStore.on(setDataTableValues, (state, updatedValues) => {
  return { ...state, ...updatedValues }
})

// $dataTableStore.watch((state) => {
//   console.log('STATE', state)
// })
