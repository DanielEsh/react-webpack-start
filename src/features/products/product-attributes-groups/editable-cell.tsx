// import { type Cell, flexRender } from '@tanstack/react-table'
// import { ProductAttributesGroup } from './types'
import { CellContext } from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { ProductAttributesGroup } from './types'

// interface Props {
//   cell: Cell<ProductAttributesGroup, unknown>
// }

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

  return isEditable ? (
    <input
      autoFocus
      className="inline-flex border-b border-black"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
    />
  ) : (
    <>{value}</>
  )
}
