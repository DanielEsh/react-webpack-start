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

type BaseData = unknown | object | any[]

interface TableProps<TData> {
  defaultData: TData[]
  columns: ColumnDef<TData>[]
}

export const Table = <TData extends BaseData>(props: TableProps<TData>) => {
  const { defaultData, columns } = props

  const [data, setData] = useState(() => [...defaultData])

  const [columnVisibility, setColumnVisibility] = useState({})

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

  const context = {
    headerGroups: headerGroups,
    rows: rows,
  }

  /**
   * TODO:
   * types
   * sync with lc
   * Header
   * Table settings (columns visible)
   * remove styles
   * fix wqrning
   */

  return (
    <TableContext.Provider value={context}>
      <div className="p-2">
        <div className="inline-block rounded border border-black shadow">
          <div className="border-b border-black px-1">
            <label>
              <input
                {...{
                  type: 'checkbox',
                  checked: table.getIsAllColumnsVisible(),
                  onChange: table.getToggleAllColumnsVisibilityHandler(),
                }}
              />{' '}
              Toggle All
            </label>
          </div>
          {table.getAllLeafColumns().map((column) => {
            return (
              <div key={column.id} className="px-1">
                <label>
                  <input
                    {...{
                      type: 'checkbox',
                      checked: column.getIsVisible(),
                      onChange: column.getToggleVisibilityHandler(),
                    }}
                  />{' '}
                  {column.id}
                </label>
              </div>
            )
          })}
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
