import type { CellContext, EditRowsState } from '@tanstack/react-table'
import { KeyboardEvent, useEffect, useState } from 'react'
import { Form } from 'shared/ui-kit'
import { ProductAttributesGroup } from './types'

interface Props {
  cellInfo: CellContext<ProductAttributesGroup, string>
}

export const EditableTableCell = ({ cellInfo }: Props) => {
  const { getValue, row, column, table } = cellInfo

  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const isEditable = table.options.meta?.editedRows[row.id]

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  const toggleEditRow = () => {
    table.options.meta?.setEditedRows((state: EditRowsState) => ({
      ...state,
      [row.id]: !state[row.id],
    }))
  }

  const onKeyEnterPress = (value: string) => {
    if (value) {
      setValue(value)
      toggleEditRow()
    }
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      onKeyEnterPress(event.currentTarget.value)
    }
  }

  return isEditable ? (
    <Form.Field name={`attributesGroups.[${cellInfo.row.index}].name`}>
      <input
        autoFocus
        className="inline-flex border-b border-black"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
      />
    </Form.Field>
  ) : (
    <>{value}</>
  )
}
