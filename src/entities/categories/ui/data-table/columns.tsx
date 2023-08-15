import { ColumnDef } from '@tanstack/react-table'
import { Category } from 'entities/categories/types'
import { CollectionsDataTableColumnHeader } from 'entities/collection/ui/data-table/collections-data-table-column-header'
import { CollectionsDataTableRowActions } from 'entities/collection/ui/data-table/collections-data-table-row-actions'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'

export const columns: ColumnDef<Category>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[98px]">
        <CollectionsDataTableColumnHeader
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
        <CollectionsDataTableColumnHeader
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
        <CollectionsDataTableColumnHeader
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
        <CollectionsDataTableColumnHeader
          column={column}
          title="actions"
        />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => (
      <Table.Cell>
        <CollectionsDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
