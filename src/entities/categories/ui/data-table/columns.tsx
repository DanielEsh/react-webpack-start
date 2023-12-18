import { ColumnDef } from '@tanstack/react-table'
import { Category } from 'entities/categories/types'
import { DataTableColumnHead } from 'shared/ui/data-table'
import { CategoriesDataTableRowActions } from './categories-data-row-actions'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'
import { formatDate } from 'shared/utils/dayjs'

export const columns: ColumnDef<Category, any>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[98px]">
        <DataTableColumnHead
          column={column}
          title="Id"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue() as ReactNode,
  },
  {
    id: 'slug',
    accessorFn: ({ slug }) => slug,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Slug"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue() as ReactNode,
  },
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Название"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue() as ReactNode,
  },
  {
    id: 'created_at',
    accessorFn: ({ created_at }) => created_at,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Дата создания"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => formatDate(info.getValue()),
  },
  {
    id: 'updated_at',
    accessorFn: ({ updated_at }) => updated_at,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Дата обновления"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => formatDate(info.getValue()),
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[98px]">
        <DataTableColumnHead column={column} />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => <CategoriesDataTableRowActions row={row} />,
    enableSorting: false,
  },
]
