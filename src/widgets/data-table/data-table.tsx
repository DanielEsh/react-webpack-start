import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { DataTableFooterToolbar } from './data-table-footer-toolbar'

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  onChange?(): void
}

export const DataTable = <TData extends unknown | object>(
  props: Props<TData>,
) => {
  const { data, columns } = props

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div>
      <div className="min-h-[309px]">
        <Table>
          <Table.Head>
            {table.getHeaderGroups().map((headerGroup) => (
              <Table.Row key={headerGroup.id}>
                {headerGroup.headers.map((header) =>
                  header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      ),
                )}
              </Table.Row>
            ))}
          </Table.Head>
          <Table.Body>
            {table.getRowModel().rows?.length ? (
              table
                .getRowModel()
                .rows.map((row) => (
                  <Table.Row key={row.id}>
                    {row
                      .getVisibleCells()
                      .map((cell) =>
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        ),
                      )}
                  </Table.Row>
                ))
            ) : (
              <Table.Row>
                <Table.Cell className="h-[308px] text-center">
                  No results.
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>

      <DataTableFooterToolbar totalPages={20} />
    </div>
  )
}
