import { Column } from '@tanstack/react-table'
import { Button } from 'shared/ui-kit/button'
import IconArrowDownUp from 'shared/assets/icons/arrow-down-up.svg'
import IconSortAscending from 'shared/assets/icons/sort-ascending.svg'
import IconSortDescending from 'shared/assets/icons/sort-descending.svg'

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

  const renderSortIcon = () =>
    column.getIsSorted() === 'desc' ? (
      <IconSortDescending className="h-4 w-4" />
    ) : column.getIsSorted() === 'asc' ? (
      <IconSortAscending className="h-4 w-4" />
    ) : (
      <IconArrowDownUp className="h-4 w-4" />
    )

  return (
    <Button
      className="-ml-2"
      size="sm"
      variant="ghost"
      addonRight={renderSortIcon()}
      onClick={toggleSort}
    >
      {title}
    </Button>
  )
}
