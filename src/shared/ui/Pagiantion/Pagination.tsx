/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

// import { usePagination } from 'shared/lib/hooks/usePagination'
import { paginationFactory } from 'shared/ui/Pagiantion/getPaginationModel'
import { clsx } from 'clsx'

interface Props {
  currentPage: number
  totalPages: number
  onChange?: (item: string) => void
}

type PaginationItemsProps = {
  disabled: boolean
  onClick: () => void
}

type PaginationPageProps = {
  isActive: boolean
  disabled: boolean
  value: number
  onClick: () => void
}

const pagesClasses = (isActive: boolean) =>
  clsx('flex items-center justify-center w-8 h-8 border border-black', {
    ['bg-black text-white']: isActive,
  })

const itemsClasses = (interactive = true) =>
  clsx('flex items-center justify-center w-8 h-8 border border-black', {
    ['opacity-60']: !interactive,
  })

export const FirstPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      FIRST
    </button>
  </li>
)

export const PreviousPageLink = ({
  onClick,
  disabled,
}: PaginationItemsProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      PREV
    </button>
  </li>
)

export const NextPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      NEXT
    </button>
  </li>
)

export const LastPageLink = ({ onClick, disabled }: PaginationItemsProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      LAST
    </button>
  </li>
)

export const Ellipsis = ({ onClick, disabled }: PaginationItemsProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      ...
    </button>
  </li>
)

export const PageLink = ({
  isActive,
  value,
  disabled,
  onClick,
}: PaginationPageProps) => (
  <li>
    <button
      className={pagesClasses(isActive)}
      onClick={onClick}
      disabled={disabled}>
      {value}
    </button>
  </li>
)

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
