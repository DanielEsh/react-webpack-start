import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ProductDto } from 'entities/products/api'
import { Table } from 'shared/ui-kit/table'
import { getProductsColumns } from './products-data-table-columns'
import {
  ConfirmDeleteDialog,
  DeleteState,
} from 'shared/ui/dialog/confirm-delete'

interface Props {
  data: ProductDto[]
  onDelete(state: DeleteState<number, ProductDto>): void
}

export const ProductsDataTable = ({ data, onDelete }: Props) => {
  const table = useReactTable({
    data,
    columns: getProductsColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <>
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
              table.getRowModel().rows.map((row) => (
                <Table.Row
                  key={row.id}
                  className="h-[54px]"
                >
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

      <ConfirmDeleteDialog onConfirmDelete={onDelete} />
    </>
  )
}
