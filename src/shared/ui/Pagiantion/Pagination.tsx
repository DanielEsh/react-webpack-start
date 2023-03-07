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

  return (
    <div className="flex gap-3">
      <div>Prev</div>
      {paginationModel?.map((item: any, idx: number) => {
        return (
          <div
            className="border border-stone-800 py-1 px-2"
            key={idx}
            onClick={() => handlePageClick(item)}>
            {item}
          </div>
        )
      })}
      <div>Next</div>
    </div>
  )
}
