import { Cell, flexRender } from '@tanstack/react-table'
import type { TableExternalData, TableExternalValue } from './types'

export interface TableCell {
  cell: Cell<TableExternalData, TableExternalValue>
}

export const TableCell = ({ cell }: TableCell) => {
  return (
    <td
      className="h-[48px] border-r border-slate-300 px-2 last:border-none"
      style={{ width: cell.column.getSize() }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
