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
      <CollectionsDataTableColumnHeader
        column={column}
        title="id"
      />
    ),
    cell: (info) => (
      <Table.Cell className="w-[98px]">
        {info.getValue() as ReactNode}
      </Table.Cell>
    ),
  },
  {
    id: 'slug',
    accessorFn: ({ slug }) => slug,
    header: ({ column }) => (
      <CollectionsDataTableColumnHeader
        column={column}
        title="slug"
      />
    ),
    cell: (info) => (
      <Table.Cell className="w-auto">{info.getValue() as ReactNode}</Table.Cell>
    ),
  },
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: ({ column }) => (
      <CollectionsDataTableColumnHeader
        column={column}
        title="name"
      />
    ),
    cell: (info) => (
      <Table.Cell className="w-auto">{info.getValue() as ReactNode}</Table.Cell>
    ),
  },
  {
    id: 'goodsCount',
    accessorFn: ({ goodsCount }) => goodsCount,
    header: ({ column }) => (
      <CollectionsDataTableColumnHeader
        column={column}
        title="goods count"
      />
    ),
    cell: (info) => (
      <Table.Cell className="w-[128px]">
        {info.getValue() as ReactNode}
      </Table.Cell>
    ),
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <CollectionsDataTableColumnHeader
        column={column}
        title="actions"
      />
    ),
    size: 98,
    cell: ({ row }) => (
      <Table.Cell className="w-[98px]">
        <CollectionsDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
