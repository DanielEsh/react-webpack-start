import { useState, useMemo, useEffect } from 'react'
import {
  getCoreRowModel,
  ColumnDef,
  useReactTable,
  SortingState,
} from '@tanstack/react-table'

import { TableHead } from 'shared/ui/Table/TableHead'
import { TableBody } from 'shared/ui/Table/TableBody'
import { TableContext, TableContextType } from 'shared/ui/Table/TableContext'

type BaseData = unknown | object

type Sort = {
  name: string
  type: 'desc' | 'asc'
} | null

interface TableProps<TData> {
  localStorageKey: string
  data: TData[]
  columns: ColumnDef<TData>[]
  onSortChange: (sort: Sort) => void
}

export const Table = <TData extends BaseData>(props: TableProps<TData>) => {
  const { localStorageKey, data = [], columns, onSortChange } = props

  const rowData = useMemo(() => data, [data])

  const emptyValues = {
    columnVisibility: {},
    columnSizing: {},
  }

  const key = localStorage.getItem(localStorageKey)
  const getter = key ? JSON.parse(key || '') : emptyValues

  const {
    columnVisibility: defaultColumnVisibility = {},
    columnSizing: defaultColumnSizing = {},
  } = getter

  const [columnVisibility, setColumnVisibility] = useState(
    defaultColumnVisibility,
  )
  const [columnSizing, setColumnSizing] = useState(defaultColumnSizing)
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    console.log('SORTING', sorting)
    onSortChange(
      sorting.length
        ? {
            name: sorting[0].id,
            type: sorting[0].desc ? 'desc' : 'asc',
          }
        : null,
    )
  }, [sorting])

  const table = useReactTable({
    data: rowData,
    columns,
    state: {
      columnVisibility,
      columnSizing,
      sorting,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnSizingChange: setColumnSizing,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    enableSorting: true,
    debugAll: true,
  })

  const headerGroups = table.getHeaderGroups()

  const { rows } = table.getRowModel()
  const cols = table.getAllLeafColumns()

  const lsValue = {
    columnVisibility,
    columnSizing,
  }

  localStorage.setItem(localStorageKey, JSON.stringify(lsValue))

  const context: TableContextType<TData> = {
    tableInstance: table,
    headerGroups: headerGroups,
    rows: rows,
    columns: cols,
  }

  return (
    <TableContext.Provider value={context}>
      <div className="overflow-hidden rounded-lg border border-slate-300 shadow-md">
        <table className="w-full">
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableContext.Provider>
  )
}
