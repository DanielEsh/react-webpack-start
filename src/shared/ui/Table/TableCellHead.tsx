import { flexRender, type Header } from '@tanstack/react-table'
import { TableResizer } from './TableResizer'

export interface TableCellHead {
  header: Header<any, unknown>
}

export const TableCellHead = ({ header }: TableCellHead) => {
  return (
    <th
      className="relative h-[44px] border-r border-slate-300 text-gray-700 last:border-none"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}

      <TableResizer header={header} />
    </th>
  )
}
