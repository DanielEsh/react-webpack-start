import { ColumnDef } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit'
import { DataTableColumnHead } from 'widgets/data-table'
import { OrderDto } from 'entities/order/api/dto'
import { OrderDataTableRowActions } from './order-data-table-row-actions'

export const getOrdersDataTableColumns: ColumnDef<OrderDto, string>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="id"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: 'number',
    accessorKey: 'number',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="number"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: 'payment_status',
    accessorKey: 'payment_status',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="payment_status"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: 'status',
    accessorKey: 'status',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="status"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: 'total_price',
    accessorKey: 'total_price',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="total_price"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => info.getValue(),
  },
  {
    id: 'actions',
    accessorKey: 'actions',
    header: ({ column }) => (
      <Table.ColumnHeader className="sticky top-0 bg-white">
        <DataTableColumnHead
          column={column}
          title="actions"
        />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => <OrderDataTableRowActions row={row} />,
    enableSorting: false,
  },
]
