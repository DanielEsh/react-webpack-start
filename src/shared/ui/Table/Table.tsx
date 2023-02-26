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

  const [data, setData] = useState(() => [...defaultData])

  const key = localStorage.getItem('test')
  const getter = JSON.parse(key || '')

  const getHiddenColumns = () =>
    Object.keys(getter).reduce<any>((acc, item) => {
      const test = getter[item]

      return (acc[item] = test.isVisible), acc
    }, {})

  const [columnVisibility, setColumnVisibility] = useState(getHiddenColumns())

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
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

  // console.log('lsValue', lsValue)

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
   * sync with lc
   * Header
   * Table settings (columns visible) +
   * remove styles
   * fix wqrning
   *
   */

  return (
    <TableContext.Provider value={context}>
      <div className="p-2">
        <TableVisibilityChanger />

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
