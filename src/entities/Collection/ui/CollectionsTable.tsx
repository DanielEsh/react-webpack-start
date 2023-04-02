import { ColumnDef } from '@tanstack/react-table'

import { Table } from 'shared/ui/Table'
import { Button } from 'shared/ui/Button'
import { TableSettingsButton } from 'shared/ui/Table/TableSettingsButton'
import { Pagiantion } from 'shared/ui/Pagiantion/Pagination'
import IconPlus from 'shared/assets/icons/plus.svg'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'

import { Collection, Meta } from '../types'

const columns: ColumnDef<Collection>[] = [
  {
    id: 'id',
    accessorKey: 'id',
    cell: (info) => info.getValue(),
    minSize: 60,
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
  },
  {
    id: 'actions',
    header: 'Actions',
    minSize: 180,
    footer: (props) => props.column.id,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2">
          <Button
            {...{
              onClick: () => {
                console.log('row', row)
              },
            }}
          >
            <IconEdit />
          </Button>
          <Button
            {...{
              onClick: () => {
                console.log('row', row)
              },
            }}
          >
            <IconTrash />
          </Button>
        </div>
      )
    },
  },
]

interface Props {
  items: Collection[]
  meta: Meta
  currentPage: number
  onPageChange: (page: number) => void
}

export const CollectionsTable = (props: Props) => {
  const { items, meta, currentPage, onPageChange } = props

  const renderHeader = () => (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Collections</h1>

      <div className="flex gap-3">
        <Button addonLeft={<IconPlus />}>Create Button</Button>
        <TableSettingsButton />
      </div>
    </div>
  )

  const handlePageClick = (page: number) => {
    onPageChange(page)
  }

  const renderFooter = () => (
    <div className="flex items-center justify-between gap-3">
      <div>Всего: {meta.totalCount} </div>
      <div className="flex items-center gap-3">
        <label>
          Rows per Page:
          <select
            name="select"
            value={2}
          >
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </label>

        <Pagiantion
          key={currentPage}          currentPage={currentPage}
          totalPages={meta.totalPages}
          onChange={(item) => handlePageClick(item)}
        />
      </div>
    </div>
  )

  return (
    <div className="">
      <Table<Collection>
        localStorageKey="CollectionData"
        defaultData={items}
        columns={columns}
        renderHeader={renderHeader()}
        renderFooter={renderFooter()}
      />
    </div>
  )
}
