/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { usePagination } from 'shared/lib/hooks/usePagination'
import type { ReactNode } from 'react'
import { paginationFactory } from 'shared/ui/Pagiantion/getPaginationModel'
import {
  PageLink,
  PreviousPageLink,
  FirstPageLink,
  Ellipsis,
  NextPageLink,
  LastPageLink,
} from './PaginationElements'
import { PaginationElementsType } from './types'

interface Props {
  currentPage: number
  totalPages: number
  onChange?: (item: string) => void
}

const renderItemComponentFunctionFactory = (
  itemTypeToComponent,
  currentPage,
  onChange,
) => {
  const onItemClickFunctionFactory = ({ value, isDisabled }) => {
    return () => {
      if (!isDisabled && onChange && currentPage !== value) {
        onChange(value)
      }
    }
  }

  return (props) => {
    const ItemComponent = itemTypeToComponent[props.type]
    const onItemClick = onItemClickFunctionFactory(props)
    return <ItemComponent onClick={onItemClick} {...props} />
  }
}

export const Pagiantion = (props: Props) => {
  const { currentPage, totalPages, onChange } = props
  const disabled = false
  // const paginationModel = usePagination({
  //   currentPage: currentPage,
  //   totalPagesCount: totalPages,
  // })

  const paginationModel = paginationFactory({
    boundaryPagesRange: 0,
    totalPages: totalPages,
    currentPage: currentPage,
  })

  console.log('MODEL', paginationModel)

  const handlePageClick = (item: string) => {
    if (!onChange) return
    onChange(item)
  }

  const buttonClasses = 'border border-stone-800 py-1 px-2'

  const itemTypeToComponent: Record<PaginationElementsType, ReactNode> = {
    [PaginationElementsType.PAGE]: PageLink,
    [PaginationElementsType.ELLIPSIS]: Ellipsis,
    [PaginationElementsType.FIRST]: FirstPageLink,
    [PaginationElementsType.PREVIOUS]: PreviousPageLink,
    [PaginationElementsType.NEXT]: NextPageLink,
    [PaginationElementsType.LAST]: LastPageLink,
  }

  const renderItemComponent = renderItemComponentFunctionFactory(
    itemTypeToComponent,
    currentPage,
    onChange,
  )

  return (
    <ul className="mt-6 flex gap-3">
      {paginationModel.map((itemModel) =>
        renderItemComponent({
          ...itemModel,
          isDisabled: !!disabled,
        }),
      )}
    </ul>
  )
}
