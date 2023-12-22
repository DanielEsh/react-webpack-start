import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { DataTableViewToolbarPageCounter } from 'widgets/data-table-view/data-table-view-toolbar-page-counter'

const rowsPerPageOptions: BaseSelectOption[] = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 20,
    label: '20',
  },
  {
    value: 40,
    label: '40',
  },
]

interface Props {
  totalCount: number
  totalPages: number
  currentPage: number
  limitPages: number
  onPageChange(currentPage: number): void
  onLimitChange(limit: number): void
}

export const DataTableViewToolbar = (props: Props) => {
  const {
    totalCount,
    totalPages,
    currentPage,
    limitPages,
    onPageChange,
    onLimitChange,
  } = props

  const handleLimitChange = (limit: number) => {
    // TODO: почему-то radixui select превращает number в string. Заменить на свой селект
    onLimitChange(+limit)
  }

  const handleCurrentPageChange = (currentPage: number) => {
    onPageChange(currentPage)
  }

  return (
    <div className="mt-6 flex items-center justify-between">
      <div>
        <span className="font-medium">Всего элементов: {totalCount}</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex w-[100px] items-center space-x-2">
          <BaseSelect
            defaultValue={limitPages}
            options={rowsPerPageOptions}
            onChange={handleLimitChange}
            label="Количество"
          />
        </div>

        <DataTableViewToolbarPageCounter
          totalPages={totalPages}
          currentPage={currentPage}
        />

        <Pagiantion
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={handleCurrentPageChange}
        />
      </div>
    </div>
  )
}
