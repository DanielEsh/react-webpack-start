import { getPaginationModel } from 'shared/ui-kit/Pagiantion/getPaginationModel'
import { renderPaginationElements } from './renderPaginationElements'
import type { PaginationModel } from './types'
interface Props {
  currentPage: number
  totalPages: number
  onChange?: (item: number) => void
}

export const Pagiantion = (props: Props) => {
  const { currentPage, totalPages, onChange } = props

  const paginationModel = getPaginationModel({
    boundaryPagesRange: 0,
    totalPages: totalPages,
    currentPage: currentPage,
  })

  console.log('MODEL', paginationModel)

  const renderItemComponent = renderPaginationElements(onChange)

  return (
    <ul className="flex gap-3">
      {paginationModel.map((itemModel: PaginationModel) =>
        renderItemComponent(itemModel),
      )}
    </ul>
  )
}
