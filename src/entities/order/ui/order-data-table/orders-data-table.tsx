import { useGetAllOrdersQuery } from 'entities/order/api/queries/use-get-all-orders-query'
import { Table } from 'shared/ui-kit'
import { Fragment } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { getOrdersDataTableColumns } from 'entities/order/ui/order-data-table/order-data-table-columns'

export const OrdersDataTable = () => {
  const { isLoading, isSuccess, data } = useGetAllOrdersQuery({
    page: 1,
    limit: 100,
  })

  const table = useReactTable({
    data: data?.content ?? [],
    columns: getOrdersDataTableColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <Table className="">
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
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
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row
                key={row.id}
                className="h-14"
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell
                className="h-full text-center"
                colSpan={getOrdersDataTableColumns.length}
              >
                No results.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  )
}
