import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHead } from 'widgets/data-table'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'
import { ProductDto } from 'entities/products/api'

export const getProductsColumns: ColumnDef<ProductDto>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[98px]">
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
      <Table.ColumnHeader className="min-w-[320px]">
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
      <Table.ColumnHeader className="min-w-[320px]">
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
      <Table.ColumnHeader className="">
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
      <Table.ColumnHeader className="">
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
      <Table.ColumnHeader className="">
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
      <Table.ColumnHeader className="w-[98px]">
        <DataTableColumnHead
          column={column}
          title="actions"
        />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => (
      <Table.Cell>
        <div>actions for {row.id}</div>
      </Table.Cell>
    ),
    enableSorting: false,
  },
]