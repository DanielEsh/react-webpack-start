import { useContext } from 'react'
import { DataTableViewContext } from './data-table-view-context'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { DataTableViewActions } from './constants'
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

export const DataTableViewToolbar = () => {
  const {
    state: { page },
    dispatch,
  } = useContext(DataTableViewContext)

  const handleLimitChange = (limit: number) => {
    dispatch({
      type: DataTableViewActions.LIMIT_CHANGE,
      // TODO: почему-то radixui select превращает number в string. Заменить на свой селект
      payload: +limit,
    })
  }

  const handleCurrentPageChange = (currentPage: number) => {
    dispatch({
      type: DataTableViewActions.PAGE_CHANGE,
      payload: currentPage,
    })
  }

  return (
    <div className="mt-6 flex items-center justify-between">
      <div>
        <span className="font-medium">Всего элементов: 20</span>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex w-[100px] items-center space-x-2">
          <BaseSelect
            defaultValue={10}
            options={rowsPerPageOptions}
            onChange={handleLimitChange}
            label="Количество"
          />
        </div>

        <DataTableViewToolbarPageCounter
          totalPages={20}
          currentPage={page}
        />

        <Pagiantion
          totalPages={20}
          currentPage={page}
          onChange={handleCurrentPageChange}
        />
      </div>
    </div>
  )
}
