import { CellContext } from '@tanstack/react-table'
import { Button } from 'shared/ui-kit'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconCheck from 'shared/assets/icons/check.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import IconChevronRight from 'shared/assets/icons/chevron-right.svg'
import IconChevronDown from 'shared/assets/icons/chevron-down.svg'
import { ProductAttributesGroup } from './types'

interface Props {
  cellInfo: CellContext<ProductAttributesGroup, unknown>
}

export const ProductAttributesGroupsTableRowActions = ({ cellInfo }: Props) => {
  const { table, row } = cellInfo

  const isEditable = !!table.options.meta?.editedRows[row.id]

  const editableButtonIcon = () =>
    isEditable ? (
      <IconCheck className="h-4 w-4" />
    ) : (
      <IconEdit className="h-4 w-4" />
    )

  const expandButtonIcon = () =>
    row.getIsExpanded() ? (
      <IconChevronDown className="h-4 w-4" />
    ) : (
      <IconChevronRight className="h-4 w-4" />
    )

  return (
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
        {editableButtonIcon()}
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
        {expandButtonIcon()}
      </Button>
    </div>
  )
}
