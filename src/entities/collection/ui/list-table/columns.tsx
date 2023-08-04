import { ReactNode } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Collection } from 'entities/collection/types'
import { Table } from 'shared/ui-kit/table'
import { CollectionsTableActions } from '../CollectionsTableActions'

export const columns: ColumnDef<Collection>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: () => (
      <Table.ColumnHeader>
        <span>id</span>
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'slug',
    accessorFn: ({ slug }) => slug,
    header: () => (
      <Table.ColumnHeader>
        <span>Slug</span>
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: () => (
      <Table.ColumnHeader>
        <span>Name</span>
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'goodsCount',
    accessorFn: ({ goodsCount }) => goodsCount,
    header: () => (
      <Table.ColumnHeader>
        <span>goods count</span>
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'actions',
    header: () => (
      <Table.ColumnHeader>
        <span>actions</span>
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => (
      <CollectionsTableActions
        row={row}
        onDeleteClick={() => console.log('delete')}
      />
    ),
    enableSorting: false,
  },
]
