import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import type { PaginationElementProps, PaginationElementsType } from './types'
import { Button } from 'shared/ui/Button'

const pagesClasses = (isActive = false, disabled = false) =>
  clsx('flex items-center justify-center', {
    ['bg-black text-white']: isActive,
    ['']: disabled,
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
      <Button
        className={pagesClasses(isActive, isDisabled)}
        onClick={onClick}
        disabled={isDisabled}
      >
        {mergeContentToType[type]}
      </Button>
    </li>
  )
}
