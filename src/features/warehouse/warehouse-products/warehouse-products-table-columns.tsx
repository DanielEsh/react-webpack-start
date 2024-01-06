import { ColumnDef } from '@tanstack/react-table'
import { WarehouseProductDto } from 'entities/warehouse/api/dto'
import { Table } from 'shared/ui-kit'
import { WarehouseProductsTableRowActions } from 'features/warehouse/warehouse-products/warehouse-products-table-row-actions'

export const warehouseProductsTableColumns: ColumnDef<
  WarehouseProductDto,
  any
>[] = [
  {
    id: 'name',
    accessorKey: 'product.name',
    header: () => <Table.ColumnHeader>Товар</Table.ColumnHeader>,
    cell: (info) => info.getValue(),
  },
  {
    id: 'quantity',
    accessorKey: 'quantity',
    header: () => <Table.ColumnHeader>Количество</Table.ColumnHeader>,
    cell: (info) => info.getValue(),
  },
  {
    id: 'actions',
    accessorKey: '',
    cell: ({ row }) => (
      <WarehouseProductsTableRowActions warehouseProduct={row.original} />
    ),
  },
]
