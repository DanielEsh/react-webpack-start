import { HeaderGroup, Row, Column, Table } from '@tanstack/react-table'
import { createContext } from 'react'
import { TableSort } from 'shared/ui/Table/types'

export interface TableContextType<TableData> {
  tableInstance: Table<TableData> | null
  headerGroups: HeaderGroup<TableData>[] | null
  rows: Row<TableData>[] | null
  columns: Column<TableData, unknown>[] | null
  onSortChange?: (sort: TableSort) => void
}

const NAME = 'TableContext'

export const TableContext = createContext<TableContextType<any>>({
  tableInstance: null,
  headerGroups: null,
  rows: null,
  columns: null,
})

export const createTableContext = <T = unknown>() => {
  return createContext<TableContextType<T>>({
    tableInstance: null,
    headerGroups: null,
    rows: null,
    columns: null,
  })
}

TableContext.displayName = NAME
