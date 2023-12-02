import { ColumnDef } from '@tanstack/react-table'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { Table } from 'shared/ui-kit'
import { DataTableColumnHead } from 'widgets/data-table'
import { WarehouseTableRowActions } from 'entities/warehouse/ui/warehouse-table/warehouse-table-row-actions'

export const warehouseColumns: ColumnDef<WarehouseDto, any>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => <Table.ColumnHeader>Id</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'name',
    accessorKey: 'name',
    header: ({ column }) => <Table.ColumnHeader>Название</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'address',
    accessorKey: 'address',
    header: ({ column }) => <Table.ColumnHeader>Адрес</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
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
      <Table.Cell>
        <WarehouseTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
