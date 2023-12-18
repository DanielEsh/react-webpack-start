import { ColumnDef } from '@tanstack/react-table'
import { StaffDto } from 'entities/staff/api/dto'
import { Table } from 'shared/ui-kit'
import { DataTableColumnHead } from 'shared/ui/data-table'
import { StaffDataTableRowActions } from 'entities/staff/ui/staff-data-table/staff-data-table-row-actions'

export const staffDataTableColumns: ColumnDef<StaffDto, any>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: () => <Table.ColumnHeader>Id</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'first_name',
    accessorKey: 'first_name',
    header: () => <Table.ColumnHeader>Имя</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'last_name',
    accessorKey: 'last_name',
    header: () => <Table.ColumnHeader>Фамилия</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'middle_name',
    accessorKey: 'middle_name',
    header: () => <Table.ColumnHeader>Отчество</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'email',
    accessorKey: 'email',
    header: () => <Table.ColumnHeader>Почта</Table.ColumnHeader>,
    cell: (info) => <Table.Cell>{info.getValue()}</Table.Cell>,
  },
  {
    id: 'phone',
    accessorKey: 'phone',
    header: () => <Table.ColumnHeader>Телефон</Table.ColumnHeader>,
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
        <StaffDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
