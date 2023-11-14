import { ColumnDef } from '@tanstack/react-table'
import { WarehouseProductDto } from 'entities/warehouse/api/dto'
import { Table } from 'shared/ui-kit'

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
]
