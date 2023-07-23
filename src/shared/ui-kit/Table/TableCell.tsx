import { Cell, flexRender } from '@tanstack/react-table'
import type { TableExternalData, TableExternalValue } from './types'

export interface TableCell {
  cell: Cell<TableExternalData, TableExternalValue>
}

export const TableCell = ({ cell }: TableCell) => {
  return (
    <td
      className="p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
      style={{ width: cell.column.getSize() }}
    >
      <div className="flex space-x-2">
        <span className="py-1">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </span>
      </div>
    </td>
  )
}
