import { ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHead } from 'widgets/data-table'
import { BrandsDataTableRowActions } from './brands-data-table-row-actions'
import { ReactNode } from 'react'
import { Table } from 'shared/ui-kit/table'
import { formatDate } from 'shared/utils/dayjs'
import { BrandDto } from 'entities/brands/api/types'

export const brandsDataTableColumns: ColumnDef<BrandDto, any>[] = [
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
    id: 'slug',
    accessorFn: ({ slug }) => slug,
    header: ({ column }) => (
      <Table.ColumnHeader className="min-w-[320px]">
        <DataTableColumnHead
          column={column}
          title="Slug"
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
          title="Наименование"
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
        <BrandsDataTableRowActions row={row} />
      </Table.Cell>
    ),
    enableSorting: false,
  },
]
