import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import { useStore } from 'effector-react'
import {
  $dataTableStore,
  setDataTableValues,
  type RowsPerPagesValues,
} from './model'

interface Props {
  totalPages: number
  onChange(): void
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

export const DataTableFooterToolbar = ({ totalPages, onChange }: Props) => {
  const { currentPage, limit } = useStore($dataTableStore)

  const handleLimitChange = (limit: number | string) => {
    setDataTableValues({
      limit: Number(limit) as RowsPerPagesValues,
    })
    onChange()
  }

  const handleCurrentPageChange = (currentPage: number) => {
    setDataTableValues({
      currentPage: currentPage,
    })
    onChange()
  }

  return (
    <div className="mt-6 flex items-center justify-end px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <BaseSelect
            defaultValue={String(limit)}
            options={rowsPerPageOptions}
            onChange={handleLimitChange}
          />
        </div>
        {totalPages > 1 && (
          <>
            <DataTablePageCounter
              totalPages={totalPages}
              currentPage={Number(currentPage) ?? 1}
            />

            <Pagiantion
              totalPages={totalPages}
              currentPage={Number(currentPage) ?? 1}
              onChange={handleCurrentPageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}
