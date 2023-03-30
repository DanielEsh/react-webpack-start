import { useState, ReactNode } from 'react'
import {
  getCoreRowModel,
  ColumnDef,
  useReactTable,
} from '@tanstack/react-table'

import { TableHead } from 'shared/ui/Table/TableHead'
import { TableBody } from 'shared/ui/Table/TableBody'
import { TableContext, TableContextType } from 'shared/ui/Table/TableContext'

import 'shared/ui/Table/table.css'
import { TableVisibilityChanger } from 'shared/ui/Table/TableVisibilityChanger'

type BaseData = unknown | object

interface TableProps<TData> {
  localStorageKey: string
  defaultData: TData[]
  columns: ColumnDef<TData>[]
  // FIXME: render props
  renderHeader?: ReactNode
}

export const Table = <TData extends BaseData>(props: TableProps<TData>) => {
  const { localStorageKey, defaultData, columns } = props

  const [data, setData] = useState(() => [...defaultData])

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

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnSizing,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnSizingChange: setColumnSizing,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
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

  /**
   * TODO:
   * types
   * sync with lc +
   * Header +
   * Table settings (columns visible) +
   * remove styles +
   * fix wqrning +
   *
   * create column type with required id, size, minsize, max size
   */

  return (
    <TableContext.Provider value={context}>
      <div className="p-2">
        {props.renderHeader}
        <table
          {...{
            style: {
              width: table.getCenterTotalSize(),
            },
          }}
        >
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableContext.Provider>
  )
}
