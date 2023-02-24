import { HeaderGroup, Row } from '@tanstack/react-table'
import { createContext } from 'react'

export interface TableContextType<TableData> {
  headerGroups: HeaderGroup<TableData>[] | null
  rows: Row<TableData>[] | null
}

const NAME = 'TableContext'

export const TableContext = createContext<TableContextType<any>>({
  headerGroups: null,
  rows: null,
})

TableContext.displayName = NAME
