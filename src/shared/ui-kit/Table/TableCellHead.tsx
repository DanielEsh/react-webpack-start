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
        <button className="focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground data-[state=open]:bg-accent text-md -ml-3 inline-flex h-8 items-center justify-center rounded-md px-3 font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50">
          <span>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
          >
            <path
              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <TableSort direction={header.column.getIsSorted()} />
      </div>

      {/*<TableResizer header={header} />*/}
    </th>
  )
}
