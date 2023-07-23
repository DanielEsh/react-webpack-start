import { useContext } from 'react'
import { TableCell } from 'shared/ui-kit/Table/TableCell'
import { TableContext } from 'shared/ui-kit/Table/TableContext'

export const TableBody = () => {
  const context = useContext(TableContext)
  const { rows } = context

  return (
    <tbody className="[&_tr:last-child]:border-0">
      {rows &&
        rows.map((row) => (
          <tr
            key={row.id}
            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
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
