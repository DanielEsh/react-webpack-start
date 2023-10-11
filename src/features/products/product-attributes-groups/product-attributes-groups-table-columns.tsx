import { ColumnDef } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit'
import { ProductAttributesGroup } from './types'
import { ProductAttributesGroupsTableRowActions } from './product-attributes-groups-table-row-actions'
import { ProductAttributesGroupsTableEditableCell } from './product-attributes-groups-table-editable-cell'

export const productAttributesGroupsTableColumns: ColumnDef<
  ProductAttributesGroup,
  string
>[] = [
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
      <ProductAttributesGroupsTableEditableCell cellInfo={cellInfo} />
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
    cell: (info) => info.getValue(),
  },
  {
    id: 'actions',
    cell: (cellInfo) => (
      <ProductAttributesGroupsTableRowActions cellInfo={cellInfo} />
    ),
  },
]
