import { ColumnDef } from '@tanstack/react-table'

import { Table } from 'shared/ui/Table'
import { Button } from 'shared/ui/Button'
import { TableSettingsButton } from 'shared/ui/Table/TableSettingsButton'

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
    header: 'ID',
    cell: ({ row, getValue }) => (
      <div
        style={{
          // Since rows are flattened by default,
          // we can use the row.depth property
          // and paddingLeft to visually indicate the depth
          // of the row
          paddingLeft: `${row.depth * 2}rem`,
        }}
      >
        {getValue<string>()}
      </div>
    ),
  },
  {
    accessorFn: (row) => row.slug,
    id: 'slug',
    cell: (info) => info.getValue(),
    header: () => <span>Slug</span>,
  },
  {
    accessorFn: (row) => row.name,
    id: 'name',
    cell: (info) => info.getValue(),
    header: () => <span>Name</span>,
  },
  {
    accessorFn: (row) => row.goodsCount,
    id: 'goodsCount',
    cell: (info) => info.getValue(),
    header: () => <span>goodsCount</span>,
  },
]

interface Props {
  collection: Collection[]
}

export const CollectionsTable = ({ collection }: Props) => {
  const renderHeader = () => (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Collections</h1>

      <div className="flex gap-3">
        <Button>Create Button</Button>
        <TableSettingsButton />
      </div>
    </div>
  )

  return (
    <Table<Collection>
      localStorageKey="CollectionData"
      defaultData={collection}
      columns={columns}
      renderHeader={renderHeader()}
    />
  )
}
