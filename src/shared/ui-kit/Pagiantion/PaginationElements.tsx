import type { ReactNode } from 'react'
import { PaginationElementProps, PaginationElementsType } from './types'
import { Button } from 'shared/ui-kit/button'
import IconChevronLeft from 'shared/assets/icons/chevron-left.svg'
import IconChevronRight from 'shared/assets/icons/chevron-right.svg'
import IconDoubleChevronLeft from 'shared/assets/icons/chevron-left-double.svg'
import IconDoubleChevronRight from 'shared/assets/icons/chevron-right-double.svg'

export const PaginationElement = (props: PaginationElementProps) => {
  const {
    type,
    value,
    isDisabled = true,
    isActive = false,
    onClick = () => null,
  } = props

  const mergeContentToType: Record<PaginationElementsType, ReactNode> = {
    FIRST: <IconDoubleChevronLeft />,
    LAST: <IconDoubleChevronRight />,
    PREVIOUS: <IconChevronLeft />,
    NEXT: <IconChevronRight />,
    ELLIPSIS: '...',
    PAGE: value,
  }

  const getVariant = () => {
    let variants = {}

    if (isActive) {
      variants = {
        variant: 'primary',
      }
    }

    return variants
  }

  return (
    <li>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size="sm"
        {...getVariant()}
      >
        {mergeContentToType[type]}
      </Button>
    </li>
  )
}
