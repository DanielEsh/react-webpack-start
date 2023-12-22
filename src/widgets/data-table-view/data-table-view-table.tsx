import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { Fragment } from 'react'
import { DataTableBody } from 'shared/ui/data-table/data-table-body'
import { useSort, type SortValues } from 'shared/ui/data-table/use-sort'

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  sorting: SortValues
  onSortingChange(sort: any): void
}

export const DataTableViewTable = <TData extends unknown | object>(
  props: Props<TData>,
) => {
  const { data, columns, sorting, onSortingChange } = props
  const { sortState, setSorting } = useSort(sorting, onSortingChange)

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: sortState,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="min-h-[572px]">
      <Table>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row
              key={headerGroup.id}
              className="hover:bg-white"
            >
              {headerGroup.headers.map((header) => (
                <Fragment key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Fragment>
              ))}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          <DataTableBody
            rows={table.getRowModel().rows}
            columnsLength={columns.length}
          />
        </Table.Body>
      </Table>
    </div>
  )
}
