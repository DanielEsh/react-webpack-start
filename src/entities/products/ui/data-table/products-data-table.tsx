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
import { useIntersection } from 'shared/lib/hooks/use-intersection/use-intersection'
import { Fragment, useEffect } from 'react'

interface Props {
  data: ProductDto[]
  onDelete(state: DeleteState<number, ProductDto>): void
  onEndReached(): void
}

export const ProductsDataTable = ({ data, onDelete, onEndReached }: Props) => {
  const table = useReactTable({
    data,
    columns: getProductsColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  const { ref: bottomElementRef, entry } = useIntersection({
    root: null, // viewport
    threshold: 0.7,
  })

  useEffect(() => {
    if (entry && entry.intersectionRatio > 0) {
      onEndReached()
    }
  }, [entry, onEndReached])

  return (
    <>
      <Table className="h-[720px] overflow-y-auto">
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
                className="h-[54px]"
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
              <Table.Cell className="h-[308px] text-center">
                No results.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <div ref={bottomElementRef}></div>
      <ConfirmDeleteDialog onConfirmDelete={onDelete} />
    </>
  )
}
