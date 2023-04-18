import { flexRender } from '@tanstack/react-table'
import { TableResizer } from './TableResizer'
import { TableSort } from './TableSort'
import type { TableHeaderType } from './types'

export interface TableCellHead {
  header: TableHeaderType
}

export const TableCellHead = ({ header }: TableCellHead) => {
  const handleClick = () => {
    if (!header.column.getCanSort()) return

    header.column.toggleSorting()
  }

  return (
    <th
      className="relative h-[44px] border-r border-slate-300 text-gray-700 last:border-none"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}
      onClick={handleClick}
    >
      <div className="flex gap-3">
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}

        <TableSort direction={header.column.getIsSorted()} />
      </div>

      <TableResizer header={header} />
    </th>
  )
}
