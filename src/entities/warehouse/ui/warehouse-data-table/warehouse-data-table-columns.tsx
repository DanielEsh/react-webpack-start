import { ColumnDef } from '@tanstack/react-table'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { Table } from 'shared/ui-kit'
import { DataTableColumnHead } from 'shared/ui/data-table'
import { WarehouseDataTableRowActions } from 'entities/warehouse/ui/warehouse-data-table/warehouse-data-table-row-actions'

export const warehouseDataTableColumns: ColumnDef<WarehouseDto, any>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: () => <Table.ColumnHeader>Id</Table.ColumnHeader>,
    cell: (info) => info.getValue(),
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: () => <Table.ColumnHeader>Название</Table.ColumnHeader>,
    cell: (info) => info.getValue(),
  },
  {
    id: 'address',
    accessorKey: 'address',
    header: () => <Table.ColumnHeader>Адрес</Table.ColumnHeader>,
    cell: (info) => info.getValue(),
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 w-[98px] bg-white">
        <DataTableColumnHead
          column={column}
          title=""
        />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => (
      <WarehouseDataTableRowActions warehouse={row.original} />
    ),
    enableSorting: false,
  },
]
