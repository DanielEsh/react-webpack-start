import { clsx } from 'clsx'

interface PaginationElementProps {
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

type PaginationItemsProps = {
  disabled: boolean
  onClick: () => void
}

export const PageLink = ({
  isActive,
  value,
  disabled,
  onClick,
}: PaginationElementProps) => (
  <li>
    <button
      className={pagesClasses(isActive)}
      onClick={onClick}
      disabled={disabled}>
      {value}
    </button>
  </li>
)

export const FirstPageLink = ({
  onClick,
  disabled,
}: PaginationElementProps) => (
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
}: PaginationElementProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      PREV
    </button>
  </li>
)

export const NextPageLink = ({ onClick, disabled }: PaginationElementProps) => (
  <li>
    <button
      className={itemsClasses(disabled)}
      disabled={disabled}
      onClick={onClick}>
      NEXT
    </button>
  </li>
)

export const LastPageLink = ({ onClick, disabled }: PaginationElementProps) => (
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
