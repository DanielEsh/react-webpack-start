import { ColumnDef } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit'
import { ProductAttributesGroup } from './types'
import { ProductAttributesGroupsTableRowActions } from './actions'
import { EditableTableCell } from './editable-cell'

export const getColumns: ColumnDef<ProductAttributesGroup, string>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: () => (
      <Table.ColumnHeader className="w-[65%]">Название</Table.ColumnHeader>
    ),
    cell: (cellInfo) => <EditableTableCell cellInfo={cellInfo} />,
  },
  {
    id: 'count',
    accessorFn: ({ attributes }) => String(attributes.length),
    header: () => (
      <Table.ColumnHeader className="w-[20%]">Количество</Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'actions',
    header: () => (
      <Table.ColumnHeader className="w-[15%]">Actions</Table.ColumnHeader>
    ),
    cell: (cellInfo) => (
      <ProductAttributesGroupsTableRowActions cellInfo={cellInfo} />
    ),
  },
]
