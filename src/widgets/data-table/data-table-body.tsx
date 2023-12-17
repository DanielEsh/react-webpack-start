import { flexRender, Row } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit'

interface Props {
  rows: Row<any>[]
  columnsLength: number
}

export const DataTableBody = ({ rows, columnsLength }: Props) => {
  if (!rows.length) {
    return (
      <Table.Row>
        <Table.Cell
          className="h-[308px] text-center"
          colSpan={columnsLength}
        >
          No results.
        </Table.Cell>
      </Table.Row>
    )
  }

  return (
    <>
      {rows.map((row) => (
        <Table.Row key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <Table.Cell key={cell.id}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </Table.Cell>
          ))}
        </Table.Row>
      ))}
    </>
  )
}
