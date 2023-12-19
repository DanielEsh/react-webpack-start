import type { DataTableViewState, DataTableViewChangeActions } from './types'
import { createContext, type Dispatch } from 'react'
import { TypeWithChildren } from 'shared/ui-kit/types'

interface DataTableViewContextValues {
  state: DataTableViewState
  dispatch: Dispatch<DataTableViewChangeActions>
}

export const DataTableViewContext = createContext<DataTableViewContextValues>({
  state: {
    page: 1,
    limit: 10,
  },
  dispatch: () => {
    throw new Error('not implemented')
  },
})

interface Props extends TypeWithChildren {
  value: DataTableViewContextValues
}

export const DataTableViewProvider = ({ value, children }: Props) => {
  return (
    <DataTableViewContext.Provider value={value}>
      {children}
    </DataTableViewContext.Provider>
  )
}
