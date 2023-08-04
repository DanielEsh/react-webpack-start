import { ReactNode, useState } from 'react'
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { Table } from 'shared/ui-kit/table'
import { Dialog } from 'shared/ui-kit/Modal/Dialog'
import { Collection } from 'entities/collection/types'
import { CollectionsDataTableRowActions } from 'entities/collection/ui/list-table/collection-data-table-row-actions'

interface Props {
  data: Collection[]
}

export const CollectionDataTable = ({ data }: Props) => {
  const columns: ColumnDef<Collection>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      header: () => (
        <Table.ColumnHeader>
          <span>id</span>
        </Table.ColumnHeader>
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'slug',
      accessorFn: ({ slug }) => slug,
      header: () => (
        <Table.ColumnHeader>
          <span>slug</span>
        </Table.ColumnHeader>
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'name',
      accessorFn: ({ name }) => name,
      header: () => (
        <Table.ColumnHeader>
          <span>name</span>
        </Table.ColumnHeader>
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'goodsCount',
      accessorFn: ({ goodsCount }) => goodsCount,
      header: () => (
        <Table.ColumnHeader>
          <span>goods count</span>
        </Table.ColumnHeader>
      ),
      cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
    },
    {
      id: 'actions',
      header: () => (
        <Table.ColumnHeader>
          <span>actions</span>
        </Table.ColumnHeader>
      ),
      cell: ({ row }) => (
        <CollectionsDataTableRowActions
          row={row}
          onDelete={showConfirmDeleteDialog}
        />
      ),
      enableSorting: false,
    },
  ]

  const [opened, { open, close }] = useDisclosure(false)
  const [sorting, setSorting] = useState<SortingState>([])
  const [deleteId, setDeleteId] = useState<number | null>(null)

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
    console.log('handleConfirmDelete', deleteId)
  }

  function showConfirmDeleteDialog(id: number) {
    setDeleteId(id)
    open()
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
        onClose={close}
        onConfirm={handleConfirmDelete}
      />
    </div>
  )
}
