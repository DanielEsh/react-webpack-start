import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useGetWarehouseProductsQuery } from 'entities/warehouse/api/queries/use-get-warehouse-products-query'
import { warehouseProductsTableColumns } from 'entities/warehouse/ui/warehouse-products-table/warehouse-products-table-columns'
import { Table } from 'shared/ui-kit'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
interface Props {
  id: number
}

export const WarehouseProductsTable = ({ id }: Props) => {
  const { data } = useGetWarehouseProductsQuery(id)

  const table = useReactTable({
    data: data?.content ?? [],
    columns: warehouseProductsTableColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
      {data && (
        <div>
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

          <div className="flex justify-end">
            {data.meta.pagination.totalPages > 1 && (
              <>
                <DataTablePageCounter
                  totalPages={data.meta.pagination.totalPages}
                  currentPage={data.meta.pagination.page}
                />

                <Pagiantion
                  totalPages={data.meta.pagination.totalPages}
                  currentPage={data.meta.pagination.page}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
