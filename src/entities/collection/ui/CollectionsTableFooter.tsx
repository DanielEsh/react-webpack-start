import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'

interface Props {
  totalItemsCount: number
  rowPerPage: number
  currentPage: number
  totalPages: number
  onPageClick: (page: number) => void
  onRowPerPageChange: (event: any) => void
}

const rowsPerPageOptions: BaseSelectOption[] = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 25,
    label: '25',
  },
]

export const CollectionsTableFooter = (props: Props) => {
  const {
    totalItemsCount,
    rowPerPage,
    currentPage,
    totalPages,
    onPageClick,
    onRowPerPageChange,
  } = props

  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        0 of 100 row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <BaseSelect
            defaultValue={rowPerPage}
            options={rowsPerPageOptions}
            onChange={onRowPerPageChange}
          />
        </div>
        <DataTablePageCounter
          totalPages={totalPages}
          currentPage={currentPage}
        />

        <Pagiantion
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={onPageClick}
        />
      </div>
    </div>
  )
}
