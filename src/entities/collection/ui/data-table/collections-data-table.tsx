import { useContext, useState } from 'react'
import { useStore } from 'effector-react'
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useIsomorphicLayoutEffect } from 'shared/lib/hooks/useIsomorphicLayoutEffect'
import { Table } from 'shared/ui-kit/table'
import { Dialog } from 'shared/ui-kit/dialog'
import { columns } from 'entities/collection/ui/data-table/collections-data-table-columns'
import { Collection } from 'entities/collection/types'
import {
  $deleteIdStore,
  $confirmDialogVisible,
  toggleConfirmDialog,
  setDeleteId,
  type CollectionTableState,
  setCollectionTableValues,
} from 'entities/collection/model'
import { useDeleteCollectionMutation } from 'entities/collection/api'
import { NotificationContext } from 'shared/notification'
import { useUpdateCollectionsList } from 'entities/collection'

interface Props {
  data: Collection[]
  onChange: () => void
}

export const CollectionsDataTable = ({ data, onChange }: Props) => {
  const deletedId = useStore($deleteIdStore)
  const opened = useStore($confirmDialogVisible)

  const { updateCollectionsList } = useUpdateCollectionsList()
  const { mutate: deleteCollectionMutation } = useDeleteCollectionMutation()
  const { showNotification } = useContext(NotificationContext)

  const [sorting, setSorting] = useState<SortingState>([])
  const transformTableSortingToStoreValues = (
    sorting: SortingState,
  ): Pick<CollectionTableState, 'sortBy' | 'orderBy'> => {
    const initialValue = {
      sortBy: 'id',
      orderBy: 'asc',
    }

    return sorting.reduce((acc, item) => {
      return {
        sortBy: item.id,
        orderBy: item.desc ? 'desc' : 'asc',
      }
    }, initialValue)
  }

  useIsomorphicLayoutEffect(() => {
    setCollectionTableValues(transformTableSortingToStoreValues(sorting))
    onChange()
  }, [sorting])

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

  const handleSuccessDelete = () => {
    showNotification({
      id: String(deletedId),
      title: 'Успешное удаление',
      message: `success delete`,
    })
    setDeleteId(null)
    updateCollectionsList()
  }

  const handleConfirmDelete = async () => {
    await deleteCollectionMutation(Number(deletedId), {
      onSuccess: () => handleSuccessDelete(),
    })
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
              {headerGroup.headers.map((header) =>
                header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    ),
              )}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows?.length ? (
            table
              .getRowModel()
              .rows.map((row) => (
                <Table.Row key={row.id}>
                  {row
                    .getVisibleCells()
                    .map((cell) =>
                      flexRender(cell.column.columnDef.cell, cell.getContext()),
                    )}
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
