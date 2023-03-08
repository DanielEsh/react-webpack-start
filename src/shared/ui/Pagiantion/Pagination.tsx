/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { usePagination } from 'shared/lib/hooks/usePagination'
import { paginationFactory } from 'shared/ui/Pagiantion/getPaginationModel'
import {
  PageLink,
  PreviousPageLink,
  FirstPageLink,
  Ellipsis,
  NextPageLink,
  LastPageLink,
} from './PaginationElements'
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

  const itemTypeToComponent = {
    PAGE: PageLink,
    ELLIPSIS: Ellipsis,
    FIRST_PAGE_LINK: FirstPageLink,
    PREVIOUS_PAGE_LINK: PreviousPageLink,
    NEXT_PAGE_LINK: NextPageLink,
    LAST_PAGE_LINK: LastPageLink,
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
