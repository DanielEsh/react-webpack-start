import { ColumnDef, Row } from '@tanstack/react-table'

import { Table } from 'shared/ui/Table'
import { Button } from 'shared/ui/Button'

import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'

import { Link } from 'react-router-dom'

import { useDeleteCollectionMutation } from 'entities/collection/api'
import { useQueryClient } from '@tanstack/react-query'

import { Collection, Meta } from '../types'

import { CollectionsTableHeader } from './CollectionsTableHeader'
import { CollectionsTableFooter } from './CollectionsTableFooter'

interface Props {
  items: Collection[]
  meta: Meta
  currentPage: number
  rowPerPage: number
  onPageChange: (page: number) => void
  onSortChange: (sort: any) => void
  onRowsPerPageChange: (event: any) => void
}

export const CollectionsTable = (props: Props) => {
  const {
    items,
    meta,
    currentPage,
    rowPerPage,
    onRowsPerPageChange,
    onPageChange,
    onSortChange,
  } = props

  const { mutate: deleteMutate } = useDeleteCollectionMutation()
  const queryClient = useQueryClient()

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  const handleDeleteSuccess = (id: number) => {
    console.log('DELETE', id)
    queryClient.invalidateQueries({ queryKey: ['collections'] })
  }

  const handleDeleteClick = (row: Row<Collection>) => {
    const id = row.original.id
    deleteMutate(id, { onSuccess: () => handleDeleteSuccess(id) })
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
      cell: ({ row }) => {
        return (
          <div className="flex justify-end gap-1">
            <Link to={`/collections/${row.original.id}`}>
              <IconEdit />
            </Link>
            <Button
              variant="ghost"
              onClick={() => handleDeleteClick(row)}
            >
              <IconTrash />
            </Button>
          </div>
        )
      },
    },
  ]

  const handleSort = (sort: any) => {
    console.log('sort', sort)
    onSortChange(sort)
  }

  return (
    <div>
      <CollectionsTableHeader />

      <div className="min-h-[284px]">
        <Table<Collection>
          localStorageKey="CollectionData"
          data={items}
          columns={columns}
          onSortChange={handleSort}
        />
      </div>

      <CollectionsTableFooter
        totalItemsCount={meta.pagination.totalItemsCount}
        currentPage={meta.pagination.currentPage}
        rowPerPage={rowPerPage}
        totalPages={meta.pagination.totalPages}
        onRowPerPageChange={onRowsPerPageChange}
        onPageClick={handlePageClick}
      />
    </div>
  )
}
