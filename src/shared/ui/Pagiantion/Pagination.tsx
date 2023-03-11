import { paginationFactory } from 'shared/ui/Pagiantion/getPaginationModel'
import { renderPaginationElements } from './renderPaginationElements'
import type { PaginationModel } from './types'
interface Props {
  currentPage: number
  totalPages: number
  onChange?: (item: number) => void
}

export const Pagiantion = (props: Props) => {
  const { currentPage, totalPages, onChange } = props

  const paginationModel = paginationFactory({
    boundaryPagesRange: 0,
    totalPages: totalPages,
    currentPage: currentPage,
  })

  console.log('MODEL', paginationModel)

  const renderItemComponent = renderPaginationElements(onChange)

  return (
    <ul className="mt-6 flex gap-3">
      {paginationModel.map((itemModel: PaginationModel) =>
        renderItemComponent({
          ...itemModel,
        }),
      )}
    </ul>
  )
}
