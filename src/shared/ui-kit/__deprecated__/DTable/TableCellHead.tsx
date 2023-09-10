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
      className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}
      onClick={handleClick}
    >
      <div className="flex gap-3">
        <span>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </span>

        <TableSort direction={header.column.getIsSorted()} />
      </div>

      {/*<TableResizer header={header} />*/}
    </th>
  )
}
