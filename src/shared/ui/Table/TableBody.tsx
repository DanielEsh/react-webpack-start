import { flexRender } from '@tanstack/react-table'
import { useContext } from 'react'
import { TableCell } from 'shared/ui/Table/TableCell'
import { TableContext } from 'shared/ui/Table/TableContext'

export const TableBody = () => {
  const context = useContext(TableContext)
  const { rows } = context

  return (
    <tbody>
      {rows &&
        rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell
                {...{
                  key: cell.id,
                  style: {
                    width: cell.column.getSize(),
                  },
                }}
                className="border border-red-500 bg-yellow-400">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </tr>
        ))}
    </tbody>
  )
}
