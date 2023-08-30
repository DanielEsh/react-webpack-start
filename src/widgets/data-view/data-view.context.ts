import { Dispatch, createContext } from 'react'

type DataViewActions =
  | { type: 'PAGE_CHANGE'; payload: number }
  | { type: 'PAGE_LIMIT_CHANGE'; payload: number }
  | { type: 'SORT_CHANGE'; payload: any }

interface DataViewState {
  page: number
  limit: number
  sortBy: string | null
  orderBy: string | null
}

interface DataViewContextValues {
  state: DataViewState
  dispatch: Dispatch<DataViewActions>
}

export const DataViewContext = createContext<DataViewContextValues | null>(null)
