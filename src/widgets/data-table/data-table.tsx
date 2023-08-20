import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  SortingState,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import {
  $dataTableStore,
  setDataTableValues,
  type DataTableState,
} from './model'
import { useState } from 'react'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
import { useStore } from 'effector-react'

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  onChange?(values: DataTableState): void
}

export const DataTable = <TData extends unknown | object>(
  props: Props<TData>,
) => {
  const { data, columns, onChange } = props
  const { sortBy, orderBy } = useStore($dataTableStore)
  const [sorting, setSorting] = useState<SortingState>([])

  const transformTableSortingToStoreValues = (
    sorting: SortingState,
  ): Pick<DataTableState, 'sortBy' | 'orderBy'> => {
    const initialValue = {}

    return sorting.reduce((acc, item) => {
      return {
        sortBy: item.id,
        orderBy: item.desc ? 'desc' : 'asc',
      }
    }, initialValue)
  }

  useIsomorphicLayoutEffect(() => {
    setDataTableValues(transformTableSortingToStoreValues(sorting))
    onChange && onChange($dataTableStore.getState())
  }, [sorting])

  useIsomorphicLayoutEffect(() => {
    if (sortBy && orderBy) {
      setSorting([
        {
          id: sortBy,
          desc: orderBy === 'desc' ? true : false,
        },
      ])
    }
  }, [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
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
                      flexRender(cell.column.columnDef.cell, cell.getContext()),
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
  )
}
