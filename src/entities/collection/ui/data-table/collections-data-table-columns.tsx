import { ColumnDef } from '@tanstack/react-table'
import { Collection } from 'entities/collection/types'
import { CollectionsDataTableColumnHeader } from './collections-data-table-column-header'
import { CollectionsDataTableRowActions } from './collections-data-table-row-actions'

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
    cell: (info) => info.getValue(),
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
    cell: (info) => info.getValue(),
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
    cell: (info) => info.getValue(),
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
    cell: (info) => info.getValue(),
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <CollectionsDataTableColumnHeader
        column={column}
        title="actions"
      />
    ),
    cell: ({ row }) => <CollectionsDataTableRowActions row={row} />,
    enableSorting: false,
  },
]
