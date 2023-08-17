import { ColumnDef } from '@tanstack/react-table'
import { Category } from 'entities/categories/types'
import { DataTableColumnHead } from 'widgets/data-table'
import { CategoriesDataTableRowActions } from './categories-data-row-actions'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'

export const columns: ColumnDef<Category>[] = [
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
    id: 'slug',
    accessorFn: ({ slug }) => slug,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="slug"
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
        <CategoriesDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
