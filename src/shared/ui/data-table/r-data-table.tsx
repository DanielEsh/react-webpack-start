import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  SortingState,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { Fragment, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
import { DataTableBody } from 'shared/ui/data-table/data-table-body'

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  sorting?: any
  onSortingChange(sort: any): void
}

export const DataTable = <TData extends unknown | object>(
  props: Props<TData>,
) => {
  const { data, columns, sorting, onSortingChange } = props
  const [internalSorting, setSorting] = useState<SortingState>([])
  const transformTableSortingToStoreValues = () => {
    const initialValue = {}

    return internalSorting.reduce((acc, item) => {
      return {
        sortBy: item.id,
        orderBy: item.desc ? 'desc' : 'asc',
      }
    }, initialValue)
  }

  useIsomorphicLayoutEffect(() => {
    if (!internalSorting.length) {
      onSortingChange({
        sortBy: null,
        orderBy: null,
      })
    }

    onSortingChange(transformTableSortingToStoreValues())
  }, [internalSorting])

  useIsomorphicLayoutEffect(() => {
    if (sorting.sortBy && sorting.orderBy) {
      setSorting([
        {
          id: sorting.sortBy,
          desc: sorting.orderBy === 'desc',
        },
      ])
    }
  }, [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting: internalSorting,
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
