import { ColumnDef } from '@tanstack/react-table'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { Table } from 'shared/ui-kit'

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
    header: ({ column }) => <Table.ColumnHeader>Name</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'address',
    accessorKey: 'address',
    header: ({ column }) => <Table.ColumnHeader>Address</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
]
