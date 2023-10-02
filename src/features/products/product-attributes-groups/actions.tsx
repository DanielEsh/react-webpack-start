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

  const isEditable = table.options.meta?.editedRows[row.id]
  const isExpanded = row.getIsExpanded()

  const EditableButtonIcon = isEditable ? IconCheck : IconEdit
  const ExpandedButtonIcon = isExpanded ? IconChevronDown : IconChevronRight

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
        <EditableButtonIcon className="h-4 w-4" />
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
        <ExpandedButtonIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
