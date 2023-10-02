import { ReactNode } from 'react'
import { ColumnDef } from '@tanstack/react-table'
import { Button, Table } from 'shared/ui-kit'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import IconChevronRight from 'shared/assets/icons/chevron-right.svg'
import IconChevronDown from 'shared/assets/icons/chevron-down.svg'
import { ProductAttributesGroup } from './types'

export const getColumns: ColumnDef<ProductAttributesGroup>[] = [
  {
    id: 'name',
    accessorFn: ({ name }) => name,
    header: 'Название',
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'count',
    accessorFn: ({ count }) => count,
    header: 'Количество',
    cell: (info) => <Table.Cell>{info.getValue() as ReactNode}</Table.Cell>,
  },
  {
    id: 'expander',
    header: () => null,
    cell: ({ row, table }) => (
      <div className="flex gap-1">
        <Button
          size="xs"
          variant="ghost"
          onClick={() => {
            table.options.meta?.setEditedRows((old: []) => ({
              ...old,
              [row.id]: !old[row.id],
            }))
          }}
        >
          <IconEdit />
        </Button>
        <Button
          size="xs"
          variant="ghost"
          onClick={() => table.options.meta?.removeRow(row.index)}
        >
          <IconTrash />
        </Button>
        <Button
          size="xs"
          variant="ghost"
          disabled={!row.getCanExpand()}
          onClick={row.getToggleExpandedHandler()}
        >
          {row.getIsExpanded() ? (
            <IconChevronDown className="h-4 w-4" />
          ) : (
            <IconChevronRight />
          )}
        </Button>
      </div>
    ),
  },
]
