import { flexRender } from '@tanstack/react-table'
import { useContext } from 'react'
import { TableCellHead } from 'shared/ui/Table/TableCellHead'
import { TableContext } from 'shared/ui/Table/TableContext'

export const TableHead = () => {
  const context = useContext(TableContext)
  const { headerGroups } = context

  return (
    <thead>
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableCellHead
                {...{
                  key: header.id,
                  colSpan: header.colSpan,
                  style: {
                    width: header.getSize(),
                  },
                }}
                className="border border-red-500 bg-slate-400">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                <div
                  {...{
                    onMouseDown: header.getResizeHandler(),
                    onTouchStart: header.getResizeHandler(),
                    className: `resizer ${
                      header.column.getIsResizing() ? 'isResizing' : ''
                    }`,
                  }}
                />
              </TableCellHead>
            ))}
          </tr>
        ))}
    </thead>
  )
}
