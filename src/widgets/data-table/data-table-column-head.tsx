import { Column } from '@tanstack/react-table'
import { Button } from 'shared/ui-kit/button'
import IconArrowUp from 'shared/assets/icons/arrow-up.svg'
import IconArrowDown from 'shared/assets/icons/arrow-down.svg'

interface Props<TData, TValue> {
  column: Column<TData, TValue>
  title: string
}

export const DataTableColumnHead = <TData, TValue>(
  props: Props<TData, TValue>,
) => {
  const { column, title } = props

  const isSortable = column.getCanSort()

  const toggleSort = () => {
    if (!isSortable) return

    column.toggleSorting()
  }

  if (!isSortable) {
    return <span>{title}</span>
  }

  const renderIcon = () =>
    column.getIsSorted() === 'desc' ? (
      <IconArrowDown />
    ) : column.getIsSorted() === 'asc' ? (
      <IconArrowUp />
    ) : null

  return (
    <Button
      className="-ml-3"
      size="sm"
      variant="ghost"
      addonRight={renderIcon()}
      onClick={toggleSort}
    >
      {title}
    </Button>
  )
}
