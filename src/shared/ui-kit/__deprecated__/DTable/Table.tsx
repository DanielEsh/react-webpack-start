import { useState, useMemo, useEffect } from 'react'
import {
  getCoreRowModel,
  ColumnDef,
  useReactTable,
  SortingState,
} from '@tanstack/react-table'

import { TableHead } from 'shared/ui-kit/__deprecated__/DTable/TableHead'
import { TableBody } from 'shared/ui-kit/__deprecated__/DTable/TableBody'
import {
  TableContext,
  TableContextType,
} from 'shared/ui-kit/__deprecated__/DTable/TableContext'
import {
  BaseTableData,
  TableSort,
} from 'shared/ui-kit/__deprecated__/DTable/types'

interface TableProps<TData> {
  localStorageKey: string
  data: TData[]
  columns: ColumnDef<TData>[]
  sort: any[]
  onSortChange: (sort: TableSort) => void
}

export const Table = <TData extends BaseTableData>(
  props: TableProps<TData>,
) => {
  const { localStorageKey, data = [], columns, sort = [], onSortChange } = props

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
  const [sorting, setSorting] = useState<SortingState>(sort)

  useEffect(() => {
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
      <div className="rounded-md border">
        <div className="w-full overflow-auto">
          <table className="caption-bottom w-full text-sm">
            <TableHead />
            <TableBody />
          </table>
        </div>
      </div>
    </TableContext.Provider>
  )
}
