import { ReactNode } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit'
import { ProductAttributesGroup } from './types'
import { ProductAttributesGroupsTableRowActions } from './actions'

export const getColumns: ColumnDef<ProductAttributesGroup>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: 'Название',
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'count',
    accessorFn: ({ count }) => count,
    header: 'Количество',
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'actions',
    header: () => 'actions',
    cell: (cellInfo) => (
      <ProductAttributesGroupsTableRowActions cellInfo={cellInfo} />
    ),
  },
]
