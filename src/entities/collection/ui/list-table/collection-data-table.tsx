import { ReactNode, useState } from 'react'
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { Dialog } from 'shared/ui-kit/Modal/Dialog'
import { Collection } from 'entities/collection/types'
import { CollectionsDataTableRowActions } from 'entities/collection/ui/list-table/collection-data-table-row-actions'
import { CollectionDataTableColumnHeader } from 'entities/collection/ui/list-table/collection-data-table-column-header'
import { useStore } from 'effector-react'
import {
  $deleteIdStore,
  $confirmDialogVisible,
  toggleConfirmDialog,
  setDeleteId,
} from 'entities/collection/model'

interface Props {
  data: Collection[]
}

export const CollectionDataTable = ({ data }: Props) => {
  const columns: ColumnDef<Collection>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      header: ({ column }) => (
        <CollectionDataTableColumnHeader
          column={column}
          title="id"
        />
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'slug',
      accessorFn: ({ slug }) => slug,
      header: ({ column }) => (
        <CollectionDataTableColumnHeader
          column={column}
          title="slug"
        />
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'name',
      accessorFn: ({ name }) => name,
      header: ({ column }) => (
        <CollectionDataTableColumnHeader
          column={column}
          title="name"
        />
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'goodsCount',
      accessorFn: ({ goodsCount }) => goodsCount,
      header: ({ column }) => (
        <CollectionDataTableColumnHeader
          column={column}
          title="goods count"
        />
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'actions',
      header: ({ column }) => (
        <CollectionDataTableColumnHeader
          column={column}
          title="actions"
        />
      ),
      cell: ({ row }) => <CollectionsDataTableRowActions row={row} />,
      enableSorting: false,
    },
  ]

  const deletedId = useStore($deleteIdStore)
  const opened = useStore($confirmDialogVisible)
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  const handleConfirmDelete = () => {
    console.log('handleConfirmDelete', deletedId)
    setDeleteId(null)
  }

  const handleCloseDialog = () => {
    setDeleteId(null)
    toggleConfirmDialog(false)
  }

  return (
    <div className="min-h-[309px]">
      <Table>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.ColumnHeader key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.ColumnHeader>
                )
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.Cell className="h-24 text-center">No results.</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>

      <Dialog
        opened={opened}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
      />
    </div>
  )
}
