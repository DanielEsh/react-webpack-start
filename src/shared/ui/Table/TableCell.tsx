import { Cell, flexRender } from '@tanstack/react-table'

export interface TableCell {
  cell: Cell<any, unknown>
}

export const TableCell = ({ cell }: TableCell) => {
  return (
    <td
      className="h-[40px] border border-neutral-300"
      style={{ width: cell.column.getSize() }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}
