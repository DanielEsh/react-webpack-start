import { ColumnDef } from '@tanstack/react-table'
import { WarehouseProductDto } from 'entities/warehouse/api/dto'
import { Button, Table } from 'shared/ui-kit'
import { Dropdown } from 'shared/ui-kit/dropdown'
import { WarehouseProductsTableRowActions } from 'entities/warehouse/ui/warehouse-products-table/warehouse-products-table-row-actions'

export const warehouseProductsTableColumns: ColumnDef<
  WarehouseProductDto,
  any
>[] = [
  {
    id: 'name',
    accessorKey: 'product.name',
    header: () => <Table.ColumnHeader>Product</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'quantity',
    accessorKey: 'quantity',
    header: () => <Table.ColumnHeader>Quantity</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'actions',
    accessorKey: '',
    header: () => <Table.ColumnHeader>Actions</Table.ColumnHeader>,
    cell: ({ row }) => (
      <Table.Cell>
        <WarehouseProductsTableRowActions warehouseProduct={row.original} />
      </Table.Cell>
    ),
  },
]
