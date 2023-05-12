import { ColumnDef } from '@tanstack/react-table'

import { Table } from 'shared/ui-kit/Table'

import { CollectionsTableActions } from './CollectionsTableActions'
import { useDeleteCollectionMutation } from 'entities/collection/api'
import { useQueryClient } from '@tanstack/react-query'

import { Collection } from '../types'
import { Dialog } from 'shared/ui-kit/Modal/Dialog'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'

interface Props {
  items: Collection[]
  sort: any
  currentPage: number
  rowPerPage: number
  onSortChange: (sort: any) => void
}

export const CollectionsTable = (props: Props) => {
  const { items, sort, onSortChange } = props

  const [opened, { open, close }] = useDisclosure(false)

  const { mutate: deleteMutate } = useDeleteCollectionMutation()
  const queryClient = useQueryClient()

  const handleDeleteSuccess = (id: number) => {
    console.log('DELETE', id)
    queryClient.invalidateQueries({ queryKey: ['collections'] })
  }

  const handleDeleteClick = (id: number) => {
    console.log('DELETE', id)
    open()
    // deleteMutate(id, { onSuccess: () => handleDeleteSuccess(id) })
  }

  const columns: ColumnDef<Collection>[] = [
    {
      id: 'id',
      accessorKey: 'id',
      cell: (info) => info.getValue(),
      minSize: 60,
      size: 60,
      header: () => <span>Id</span>,
    },
    {
      accessorFn: (row) => row.slug,
      id: 'slug',
      cell: (info) => info.getValue(),
      header: () => <span>Slug</span>,
      minSize: 180,
    },
    {
      accessorFn: (row) => row.name,
      id: 'name',
      cell: (info) => info.getValue(),
      header: () => <span>Name</span>,
      minSize: 250,
    },
    {
      accessorFn: (row) => row.goodsCount,
      id: 'goodsCount',
      cell: (info) => info.getValue(),
      header: () => <span>goodsCount</span>,
      minSize: 80,
      size: 80,
    },
    {
      id: 'actions',
      header: 'Actions',
      minSize: 180,
      size: 180,
      footer: (props) => props.column.id,
      enableSorting: false,
      cell: ({ row }) => (
        <CollectionsTableActions
          row={row}
          onDeleteClick={handleDeleteClick}
        />
      ),
    },
  ]

  const handleSort = (sort: any) => {
    console.log('sort', sort)
    onSortChange(sort)
  }

  return (
    <div className="min-h-[284px]">
      <Table<Collection>
        localStorageKey="CollectionData"
        data={items}
        columns={columns}
        sort={sort}
        onSortChange={handleSort}
      />

      <Dialog
        opened={opened}
        onClose={close}
      >
        123
      </Dialog>
    </div>
  )
}
