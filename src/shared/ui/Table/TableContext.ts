import { HeaderGroup, Row } from '@tanstack/react-table'
import { createContext } from 'react'

export interface TableContextType<TableData> {
  headerGroups: HeaderGroup<TableData>[]
  rows: Row<any>[]
}

const NAME = 'TableContext'

export const TableContext = createContext<TableContextType<null> | null>(null)

TableContext.displayName = NAME
