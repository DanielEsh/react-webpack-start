import type { TouchEvent, MouseEvent } from 'react'
import { flexRender, type Header } from '@tanstack/react-table'

export interface TableCellHead {
  header: Header<any, unknown>
}

export const TableCellHead = ({ header }: TableCellHead) => {
  const handleTouchResize = (event: TouchEvent | MouseEvent) => {
    const changeColumnSesizeFn = header.getResizeHandler()
    changeColumnSesizeFn(event)
  }

  return (
    <th
      className="relative h-[44px] border-b border-slate-200 bg-slate-100 text-gray-700"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}

      <div
        onTouchStart={(event) => handleTouchResize(event)}
        onMouseDown={(event) => handleTouchResize(event)}
        className={`resizer ${
          header.column.getIsResizing() ? 'isResizing' : ''
        }`}
      />
    </th>
  )
}
