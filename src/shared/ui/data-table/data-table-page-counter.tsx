interface Props {
  currentPage: number
  totalPages: number
}
export const DataTablePageCounter = ({ currentPage, totalPages }: Props) => {
  return (
    <div className="flex w-[100px] items-center justify-center text-sm font-medium">
      Page {currentPage} of {totalPages}
    </div>
  )
}
