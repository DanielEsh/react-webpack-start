import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { PaginationElementsType } from './types'

interface PaginationElementProps {
  isActive?: boolean
  isDisabled?: boolean
  value: number | ReactNode
  onClick: () => void
}

const pagesClasses = (isActive = false, disabled = false) =>
  clsx('flex items-center justify-center py-1 px-2 border border-black', {
    ['bg-black text-white']: isActive,
    ['bg-red-500']: disabled,
  })

const PaginationElementValues = {
  FIRST: 'FIRST',
  LAST: 'LAST',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
  ELLISIS: '...',
}

const PaginationElement = (props: PaginationElementProps) => {
  const {
    value,
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
        {value}
      </button>
    </li>
  )
}

export const PageLink = (props: PaginationElementProps) => (
  <PaginationElement {...props} />
)

export const FirstPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement
      {...props}
      value={PaginationElementValues.FIRST}
      isActive={false}
    />
  )
}

export const PreviousPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement
      {...props}
      value={PaginationElementValues.PREVIOUS}
      isActive={false}
    />
  )
}

export const NextPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement
      {...props}
      value={PaginationElementValues.NEXT}
      isActive={false}
    />
  )
}

export const LastPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement
      {...props}
      value={PaginationElementValues.LAST}
      isActive={false}
    />
  )
}

export const Ellipsis = (props: PaginationElementProps) => {
  return (
    <PaginationElement
      {...props}
      value={PaginationElementValues.ELLISIS}
      isActive={false}
    />
  )
}
