import { useContext } from 'react'
import {
  TableContext,
  type TableContextType,
} from 'shared/ui/Table/TableContext'
import { flexRender, type Header } from '@tanstack/react-table'
import { TableResizer } from './TableResizer'

export interface TableCellHead {
  header: Header<any, unknown>
}

export const TableCellHead = ({ header }: TableCellHead) => {
  const { onSortChange } = useContext(TableContext)

  const handleClick = () => {
    header.column.toggleSorting()
  }

  return (
    <th
      className="relative h-[44px] border-r border-slate-300 text-gray-700 last:border-none"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}
      onClick={handleClick}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}

      {{
        asc: 'ASC',
        desc: 'DESC',
      }[header.column.getIsSorted() as string] ?? null}

      <TableResizer header={header} />
    </th>
  )
}
