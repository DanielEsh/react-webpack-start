import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import { DataViewContext } from './data-view.context'
import { useContext } from 'react'
import { DataViewActions } from './types'

interface Props {
  totalPages: number
}

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

export const DataViewFooterToolbar = ({ totalPages }: Props) => {
  const context = useContext(DataViewContext)

  const handleLimitChange = (limit: number | string) => {
    context?.dispatch({
      type: DataViewActions.PAGE_LIMIT_CHANGE,
      payload: Number(limit),
    })
  }

  const handleCurrentPageChange = (currentPage: number) => {
    context?.dispatch({
      type: DataViewActions.PAGE_CHANGE,
      payload: currentPage,
    })
  }

  return (
    <div className="mt-6 flex items-center justify-end px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center space-x-2">
          <BaseSelect
            defaultValue={10}
            options={rowsPerPageOptions}
            onChange={handleLimitChange}
            label="Количество"
          />
        </div>
        {totalPages > 1 && (
          <>
            <DataTablePageCounter
              totalPages={totalPages}
              currentPage={Number(context?.state.page) ?? 1}
            />

            <Pagiantion
              totalPages={totalPages}
              currentPage={Number(context?.state.page) ?? 1}
              onChange={handleCurrentPageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}
