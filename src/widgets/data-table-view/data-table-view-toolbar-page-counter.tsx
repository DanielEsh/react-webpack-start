interface Props {
  currentPage: number
  totalPages: number
}
export const DataTableViewToolbarPageCounter = ({
  currentPage,
  totalPages,
}: Props) => {
  return (
    <div className="flex items-center justify-center text-sm font-medium">
      Страница {currentPage} из {totalPages}
    </div>
  )
}
