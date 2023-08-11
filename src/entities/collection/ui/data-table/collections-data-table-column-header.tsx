import { Column } from '@tanstack/react-table'
import { Table } from 'shared/ui-kit/table'
import { Button } from 'shared/ui-kit/button'
import IconArrowUp from 'shared/assets/icons/arrow-up.svg'
import IconArrowDown from 'shared/assets/icons/arrow-down.svg'

interface Props<TData, TValue> {
  column: Column<TData, TValue>
  title: string
}

export const CollectionsDataTableColumnHeader = <TData, TValue>(
  props: Props<TData, TValue>,
) => {
  const { column, title } = props

  const isSortable = column.getCanSort()

  const toggleSort = () => {
    if (!isSortable) return

    column.toggleSorting()
  }

  const renderContent = () => {
    if (!isSortable) {
      return <span>{title}</span>
    }

    return (
      <Button
        className="-ml-3"
        size="sm"
        variant="ghost"
        onClick={toggleSort}
      >
        <div className="flex gap-3">
          <span>{title}</span>

          <div className="flex items-center">
            {column.getIsSorted() === 'desc' ? (
              <IconArrowDown />
            ) : column.getIsSorted() === 'asc' ? (
              <IconArrowUp />
            ) : null}
          </div>
        </div>
      </Button>
    )
  }

  return <Table.ColumnHeader>{renderContent()}</Table.ColumnHeader>
}
