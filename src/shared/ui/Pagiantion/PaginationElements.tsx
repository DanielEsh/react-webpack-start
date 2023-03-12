import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import type { PaginationElementProps, PaginationElementsType } from './types'

const pagesClasses = (isActive = false, disabled = false) =>
  clsx('flex items-center justify-center py-1 px-2 border border-black', {
    ['bg-black text-white']: isActive,
    ['bg-red-500']: disabled,
  })

export const PaginationElement = (props: PaginationElementProps) => {
  const {
    type,
    value,
    isDisabled = true,
    isActive = false,
    onClick = () => null,
  } = props

  const mergeContentToType: Record<PaginationElementsType, ReactNode> = {
    FIRST: 'FIRST',
    LAST: 'LAST',
    PREVIOUS: 'PREV',
    NEXT: 'NEXT',
    ELLIPSIS: '...',
    PAGE: value,
  }

  return (
    <li>
      <button
        className={pagesClasses(isActive, isDisabled)}
        onClick={onClick}
        disabled={isDisabled}>
        {mergeContentToType[type]}
      </button>
    </li>
  )
}
