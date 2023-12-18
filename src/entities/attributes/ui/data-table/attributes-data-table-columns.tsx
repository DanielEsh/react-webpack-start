import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHead } from 'shared/ui/data-table'
import { AttributesDataTableRowActions } from './attributes-data-table-row-actions'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'
import { AttributeDto } from 'entities/attributes/api'
import { formatDate } from 'shared/utils/dayjs'

export const attributesDataTableColumns: ColumnDef<AttributeDto, any>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[98px]">
        <DataTableColumnHead
          column={column}
          title="Id"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Название"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'type',
    accessorFn: ({ type }) => type,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Тип"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'created_at',
    accessorFn: ({ created_at }) => created_at,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Дата создания"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{formatDate(info.getValue())}</Table.Cell>,
  },
  {
    id: 'updated_at',
    accessorFn: ({ updated_at }) => updated_at,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Дата обновления"
        />
      </Table.ColumnHeader>
    ),
    cell: (info) => <Table.Cell>{formatDate(info.getValue())}</Table.Cell>,
  },
  {
    id: 'actions',
    header: ({ column }) => (
      <Table.ColumnHeader className="w-[98px]">
        <DataTableColumnHead
          column={column}
          title=""
        />
      </Table.ColumnHeader>
    ),
    cell: ({ row }) => (
      <Table.Cell>
        <AttributesDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
