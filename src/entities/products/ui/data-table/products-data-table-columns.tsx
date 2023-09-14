import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHead } from 'widgets/data-table'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'
import { ProductDto } from 'entities/products/api'
import { ProductsDataTableRowActions } from './products-data-table-row-actions'

export const getProductsColumns: ColumnDef<ProductDto>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 w-[98px] bg-white">
        <DataTableColumnHead
          column={column}
          title="id"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'article',
    accessorFn: ({ article }) => article,
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 min-w-[320px] bg-white">
        <DataTableColumnHead
          column={column}
          title="article"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 min-w-[320px] bg-white">
        <DataTableColumnHead
          column={column}
          title="name"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'price',
    accessorFn: ({ price }) => price,
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="price"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'category',
    accessorFn: ({ category }) => category.name,
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="category"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'brand',
    accessorFn: ({ brand }) => brand.name,
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="brand"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 w-[98px] bg-white">
        <DataTableColumnHead
          column={column}
          title="actions"
        />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => (
      <Table.Cell>
        <ProductsDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
