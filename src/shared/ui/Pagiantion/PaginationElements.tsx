import { clsx } from 'clsx'
import type { PaginationElementProps } from './types'

const pagesClasses = (isActive = false, disabled = false) =>
  clsx('flex items-center justify-center py-1 px-2 border border-black', {
    ['bg-black text-white']: isActive,
    ['bg-red-500']: disabled,
  })

const PaginationElementValues = {
  FIRST: 'FIRST',
  LAST: 'LAST',
  PREVIOUS: 'PREV',
  NEXT: 'NEXT',
  ELLISIS: '...',
}

const PaginationElement = (props: PaginationElementProps) => {
  const {
    children,
    isDisabled = true,
    isActive = false,
    onClick = () => null,
  } = props

  return (
    <li>
      <button
        className={pagesClasses(isActive, isDisabled)}
        onClick={onClick}
        disabled={isDisabled}>
        {children}
      </button>
    </li>
  )
}

export const PaginationPageLink = (props: PaginationElementProps) => (
  <PaginationElement {...props} />
)

export const PagiantionFirstLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.FIRST}
    </PaginationElement>
  )
}

export const PagiantionPreviousLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.PREVIOUS}
    </PaginationElement>
  )
}

export const PaginationNextLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.NEXT}
    </PaginationElement>
  )
}

export const PagiantionLastLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.LAST}
    </PaginationElement>
  )
}

export const PagiantionEllipsisLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.ELLISIS}
    </PaginationElement>
  )
}
