import { useState } from 'react'
import {
  getCoreRowModel,
  ColumnDef,
  useReactTable,
} from '@tanstack/react-table'

import { TableHead } from 'shared/ui/Table/TableHead'
import { TableBody } from 'shared/ui/Table/TableBody'
import { TableContext } from 'shared/ui/Table/TableContext'

import 'shared/ui/Table/table.css'
import { TableVisibilityChanger } from 'shared/ui/Table/TableVisibilityChanger'

type BaseData = unknown | object | any[]

interface TableProps<TData> {
  defaultData: TData[]
  columns: ColumnDef<TData>[]
}

export const Table = <TData extends BaseData>(props: TableProps<TData>) => {
  const { defaultData, columns } = props

  const key = localStorage.getItem('test')
  const getter = JSON.parse(key || '')

  const getHiddenColumns = () =>
    Object.keys(getter).reduce<any>((acc, item) => {
      const test = getter[item]

      return (acc[item] = test.isVisible), acc
    }, {})

  const getSizesColumns = () =>
    Object.keys(getter).reduce<any>((acc, item) => {
      const test = getter[item]

      return (acc[item] = test.size), acc
    }, {})

  const [columnVisibility, setColumnVisibility] = useState(getHiddenColumns())
  const [columnSizing, setColumnSizing] = useState(getSizesColumns)

  const table = useReactTable({
    data: [...defaultData],
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

  const lsValue = cols.reduce<any>((acc, n) => {
    const name = n.id

    const isVisible = n.getIsVisible()
    const size = n.getSize()

    const result = {
      isVisible,
      size,
    }

    return (acc[name] = result), acc
  }, {})

  localStorage.setItem('test', JSON.stringify(lsValue))

  const context = {
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
        <TableVisibilityChanger />
        <div className="flex justify-between">
          <div>Persons</div>

          <div className="flex gap-3">
            <button onClick={() => setColumnSizing({})}>reset Size</button>
          </div>
        </div>
        <table
          {...{
            style: {
              width: table.getCenterTotalSize(),
            },
          }}>
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableContext.Provider>
  )
}
