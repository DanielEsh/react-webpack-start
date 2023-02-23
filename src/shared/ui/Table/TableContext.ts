import { HeaderGroup } from '@tanstack/react-table'
import { createContext } from 'react'

export interface TableContextType<TableData> {
  headerGroups: HeaderGroup<TableData>[]
}

// const NAME = 'TableContext')

// TableContext.displayName = NAME
