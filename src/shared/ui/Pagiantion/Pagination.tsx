/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { paginationFactory } from 'shared/ui/Pagiantion/getPaginationModel'
import { renderPaginationElements } from './PaginationElements'
interface Props {
  currentPage: number
  totalPages: number
  onChange?: (item: string) => void
}

export const Pagiantion = (props: Props) => {
  const { currentPage, totalPages, onChange } = props

  const paginationModel = paginationFactory({
    boundaryPagesRange: 0,
    totalPages: totalPages,
    currentPage: currentPage,
  })

  console.log('MODEL', paginationModel)

  const renderItemComponent = renderPaginationElements(
    currentPage,
    totalPages,
    onChange,
  )

  return (
    <ul className="mt-6 flex gap-3">
      {paginationModel.map((itemModel) =>
        renderItemComponent({
          ...itemModel,
          isDisabled: false,
        }),
      )}
    </ul>
  )
}
