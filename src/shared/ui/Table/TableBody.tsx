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
          <tr
            key={row.id}
            className="border-b border-slate-300 last:border-none even:bg-slate-100"
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell
                key={cell.id}
                cell={cell}
              />
            ))}
          </tr>
        ))}
    </tbody>
  )
}
