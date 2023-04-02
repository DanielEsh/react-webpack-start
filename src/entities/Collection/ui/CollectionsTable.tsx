import { ColumnDef } from '@tanstack/react-table'

import { Table } from 'shared/ui/Table'
import { Button } from 'shared/ui/Button'
import { TableSettingsButton } from 'shared/ui/Table/TableSettingsButton'
import { Pagiantion } from 'shared/ui/Pagiantion/Pagination'
import IconPlus from 'shared/assets/icons/plus.svg'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'

interface Collection {
  id: number
  slug: string
  name: number
  goodsCount: number
}

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
  collection: Collection[]
  onPageChange: (page: number) => void
}

export const CollectionsTable = (props: Props) => {
  const { collection, onPageChange } = props

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
      <div>Всего: 20 </div>
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
          currentPage={1}
          totalPages={10}
          onChange={(item) => handlePageClick(item)}
        />
      </div>
    </div>
  )

  return (
    <div className="">
      <Table<Collection>
        localStorageKey="CollectionData"
        defaultData={collection}
        columns={columns}
        renderHeader={renderHeader()}
        renderFooter={renderFooter()}
      />
    </div>
  )
}
