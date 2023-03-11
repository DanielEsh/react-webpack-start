import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { PaginationElementsType } from './types'

interface PaginationElementProps {
  isActive: boolean
  disabled: boolean
  value: number | ReactNode
  onClick: () => void
}

interface PaginationItemsProps {
  disabled: boolean
  onClick: () => void
}

const pagesClasses = (isActive: boolean) =>
  clsx('flex items-center justify-center py-1 px-2 border border-black', {
    ['bg-black text-white']: isActive,
  })

const itemsClasses = (interactive = true) =>
  clsx('flex items-center justify-center py-1 px-2 border border-black', {
    ['bg-red-500']: !interactive,
  })

const PaginationElementValues = {
  FIRST: 'FIRST',
  LAST: 'LAST',
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
  ELLISIS: '...',
}

const PaginationElement = (props: PaginationElementProps) => {
  const { value, disabled, isActive = false, onClick = () => null } = props

  return (
    <li>
      <button
        className={pagesClasses(isActive)}
        onClick={onClick}
        disabled={disabled}>
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
