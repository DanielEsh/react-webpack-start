import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'

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
    value: 1,
    label: '20',
  },
  {
    value: 2,
    label: '40',
  },
  {
    value: 3,
    label: '60',
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
            defaultValue="20"
            options={rowsPerPageOptions}
          />
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page 1 of 10
        </div>

        <Pagiantion
          totalPages={totalPages}
          currentPage={currentPage}
          onChange={onPageClick}
        />
      </div>
    </div>
  )
}
