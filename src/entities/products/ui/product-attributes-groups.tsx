import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ReactNode } from 'react'
import { Button, Table } from 'shared/ui-kit'

interface ProductAttributesGroup {
  name: string
  count: number
}

const getColumns: ColumnDef<ProductAttributesGroup>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: () => (
      <Table.ColumnHeader className="sticky top-0 min-w-[320px] bg-white">
        Название
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'count',
    accessorFn: ({ count }) => count,
    header: () => (
      <Table.ColumnHeader className="sticky top-0 min-w-[320px] bg-white">
        Количество
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
]

const data: ProductAttributesGroup[] = [
  {
    name: 'Группа атрибутов 1',
    count: 23,
  },
  {
    name: 'Группа атрибутов 2',
    count: 1,
  },
]

export const ProductsAttributesGroups = () => {
  const table = useReactTable({
    data: data,
    columns: getColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="mt-4 px-6">
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
              <Table.Cell className="h-24 text-center">No results.</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <div className="mt-4">
        <Button variant="ghost">Добавить группу атрибутов</Button>
      </div>
    </div>
  )
}
