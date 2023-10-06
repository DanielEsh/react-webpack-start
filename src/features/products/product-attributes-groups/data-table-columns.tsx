import { ColumnDef } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit'
import { ProductAttributesGroup } from './types'
import { ProductAttributesGroupsTableRowActions } from './actions'
import { EditableTableCell } from './editable-cell'

export const getColumns: ColumnDef<ProductAttributesGroup, string>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: ({ column }) => (
      <Table.ColumnHeader
        key={column.id}
        className="w-[65%] bg-white"
      >
        Название
      </Table.ColumnHeader>
    ),
    cell: (cellInfo) => (
      <EditableTableCell
        key={cellInfo.cell.id}
        cellInfo={cellInfo}
      />
    ),
  },
  {
    id: 'count',
    accessorFn: ({ attributes }) => String(attributes.length),
    header: ({ column }) => (
      <Table.ColumnHeader
        key={column.id}
        className="w-[20%] bg-white"
      >
        Количество
      </Table.ColumnHeader>
    ),
    cell: (info) => (
      <Table.Cell key={info.cell.id}>{info.getValue()}</Table.Cell>
    ),
  },
  {
    id: 'actions',
    cell: (cellInfo) => (
      <ProductAttributesGroupsTableRowActions cellInfo={cellInfo} />
    ),
  },
]
