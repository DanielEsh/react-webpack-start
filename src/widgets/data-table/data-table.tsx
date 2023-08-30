import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  SortingState,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { type DataTableState } from './model'
import { useContext, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
import { DataViewContext } from 'widgets/data-view/data-view.context'

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
}

export const DataTable = <TData extends unknown | object>(
  props: Props<TData>,
) => {
  const { data, columns } = props
  const context = useContext(DataViewContext)
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
    if (!sorting.length) {
      context?.dispatch({
        type: 'SORT_CHANGE',
        payload: {
          sortBy: null,
          orderBy: null,
        },
      })
    }

    context?.dispatch({
      type: 'SORT_CHANGE',
      payload: transformTableSortingToStoreValues(sorting),
    })
  }, [sorting])

  useIsomorphicLayoutEffect(() => {
    if (context?.state.sortBy && context?.state.orderBy) {
      setSorting([
        {
          id: context?.state.sortBy,
          desc: context?.state.orderBy === 'desc' ? true : false,
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
    <div className="min-h-[572px]">
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
