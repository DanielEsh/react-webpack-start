import { ColumnDef } from '@tanstack/react-table'
import { Collection } from 'entities/collection/types'
import { CollectionsDataTableColumnHeader } from './collections-data-table-column-header'
import { CollectionsDataTableRowActions } from './collections-data-table-row-actions'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'

export const columns: ColumnDef<Collection>[] = [
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
    id: 'goodsCount',
    accessorFn: ({ goodsCount }) => goodsCount,
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[128px]">
        <CollectionsDataTableColumnHeader
          column={column}
          title="goods count"
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
