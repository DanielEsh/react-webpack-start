import { flexRender, type Header } from '@tanstack/react-table'

export interface TableCellHead {
  header: Header<any, unknown>
}

export const TableCellHead = ({ header }: TableCellHead) => {
  return (
    <th
      className="border border-red-500 bg-slate-400"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}>
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
    </th>
  )
}
