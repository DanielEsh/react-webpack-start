import { flexRender, type Header } from '@tanstack/react-table'

export interface TableCellHead {
  header: Header<any, unknown>
}

export const TableCellHead = ({ header }: TableCellHead) => {
  const handleTouchResize = (event: any) => {
    const changeColumnSesizeFn = header.getResizeHandler()
    changeColumnSesizeFn(event)
  }

  const handleTouchEnd = () => {
    console.log('event', header.column.id, header.getSize())
  }

  return (
    <th
      className="relative border border-red-500 bg-slate-400"
      colSpan={header.colSpan}
      style={{ width: header.getSize() }}>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}

      <div
        onTouchStart={(event) => handleTouchResize(event)}
        onMouseUp={handleTouchEnd}
        onMouseDown={(event) => handleTouchResize(event)}
        className={`resizer ${
          header.column.getIsResizing() ? 'isResizing' : ''
        }`}
      />
    </th>
  )
}
