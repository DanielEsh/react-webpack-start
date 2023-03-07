import { usePagination } from 'shared/lib/hooks/usePagination'

interface Props {
  currentPage: number
  totalPages: number
  onChange?: (item: string) => void
}

export const Pagiantion = (props: Props) => {
  const { currentPage, totalPages, onChange } = props

  const paginationModel = usePagination({
    currentPage: currentPage,
    totalPagesCount: totalPages,
  })

  const handlePageClick = (item: string) => {
    if (!onChange) return
    onChange(item)
  }

  const buttonClasses = 'border border-stone-800 py-1 px-2'

  return (
    <div className="flex gap-3">
      <div className={buttonClasses}>First</div>
      <div className={buttonClasses}>Prev</div>
      {paginationModel?.map((item: any, idx: number) => {
        return (
          <div
            className={buttonClasses}
            key={idx}
            onClick={() => handlePageClick(item)}>
            {item}
          </div>
        )
      })}
      <div className={buttonClasses}>Next</div>
      <div className={buttonClasses}>Last</div>
    </div>
  )
}
