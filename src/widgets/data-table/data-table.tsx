import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  SortingState,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { Fragment, useContext, useState } from 'react'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
import { DataViewContext } from 'widgets/data-view/data-view.context'
import { DataViewActions, type SortPayload } from 'widgets/data-view/types'
import { DataTableBody } from 'widgets/data-table/data-table-body'

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

  const transformTableSortingToStoreValues = (sorting: SortingState) => {
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
        type: DataViewActions.SORT_CHANGE,
        payload: {
          sortBy: null,
          orderBy: null,
        },
      })
    }

    context?.dispatch({
      type: DataViewActions.SORT_CHANGE,
      payload: transformTableSortingToStoreValues(sorting) as SortPayload,
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
