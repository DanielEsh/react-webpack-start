import { Pagiantion } from 'shared/ui/Pagiantion/Pagination'

interface Props {
  totalItemsCount: number
  rowPerPage: number
  currentPage: number
  totalPages: number
  onPageClick: (page: number) => void
  onRowPerPageChange: (event: any) => void
}

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
    <div className="flex items-center justify-between gap-3">
      <div>Всего: {totalItemsCount} </div>

      <div className="flex items-center gap-3">
        <label>
          Rows per Page:
          <select
            name="select"
            value={rowPerPage}
            onChange={onRowPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </label>

        {totalPages > 1 && (
          <Pagiantion
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={(item: number) => onPageClick(item)}
          />
        )}
      </div>
    </div>
  )
}
