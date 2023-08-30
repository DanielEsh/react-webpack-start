import { Dispatch, createContext } from 'react'
import { type DataViewState, type DataViewActionsType } from './types'

interface DataViewContextValues {
  state: DataViewState
  dispatch: Dispatch<DataViewActionsType>
}

export const DataViewContext = createContext<DataViewContextValues | null>(null)
