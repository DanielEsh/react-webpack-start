import { useState } from 'react'
import {
  flexRender,
  getCoreRowModel,
  ColumnDef,
  useReactTable,
} from '@tanstack/react-table'

import { TableHead } from 'shared/ui/Table/TableHead'
import { TableBody } from 'shared/ui/Table/TableBody'
import { TableCellHead } from 'shared/ui/Table/TableCellHead'
import { TableCell } from 'shared/ui/Table/TableCell'

import 'shared/ui/Table/table.css'

interface TableProps {
  defaultData: any[]
  columns: ColumnDef<any>[]
}

export const Table = (props: TableProps) => {
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

  const renderHeadersGroups = () =>
    headerGroups.map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableCellHead
            {...{
              key: header.id,
              colSpan: header.colSpan,
              style: {
                width: header.getSize(),
              },
            }}
            className="border border-red-500 bg-slate-400">
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
            <div
              {...{
                onMouseDown: header.getResizeHandler(),
                onTouchStart: header.getResizeHandler(),
                className: `resizer ${
                  header.column.getIsResizing() ? 'isResizing' : ''
                }`,
              }}
            />
          </TableCellHead>
        ))}
      </tr>
    ))

  const renderBody = () =>
    rows.map((row) => (
      <tr key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <TableCell
            {...{
              key: cell.id,
              style: {
                width: cell.column.getSize(),
              },
            }}
            className="border border-red-500 bg-yellow-400">
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </tr>
    ))

  return (
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
        <TableHead>{renderHeadersGroups()}</TableHead>
        <TableBody>{renderBody()}</TableBody>
      </table>
    </div>
  )
}
