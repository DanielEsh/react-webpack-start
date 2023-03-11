import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { PaginationElementsType, PaginationModel } from './types'

interface PaginationElementProps extends PaginationModel {
  children: ReactNode
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

export const PageLink = (props: PaginationElementProps) => (
  <PaginationElement {...props} />
)

export const FirstPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.FIRST}
    </PaginationElement>
  )
}

export const PreviousPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.PREVIOUS}
    </PaginationElement>
  )
}

export const NextPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.NEXT}
    </PaginationElement>
  )
}

export const LastPageLink = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.LAST}
    </PaginationElement>
  )
}

export const Ellipsis = (props: PaginationElementProps) => {
  return (
    <PaginationElement {...props}>
      {PaginationElementValues.ELLISIS}
    </PaginationElement>
  )
}

export const renderPaginationElements = (
  onChangeCb?: (value: number) => void,
) => {
  const itemTypeToComponent: Record<
    PaginationElementsType,
    (props: PaginationElementProps) => JSX.Element
  > = {
    [PaginationElementsType.PAGE]: PageLink,
    [PaginationElementsType.ELLIPSIS]: Ellipsis,
    [PaginationElementsType.FIRST]: FirstPageLink,
    [PaginationElementsType.PREVIOUS]: PreviousPageLink,
    [PaginationElementsType.NEXT]: NextPageLink,
    [PaginationElementsType.LAST]: LastPageLink,
  }

  const handleClick = ({ value }: PaginationModel) => {
    return () => (onChangeCb ? onChangeCb(value) : null)
  }

  return (props: PaginationModel) => {
    const PaginationComponent = itemTypeToComponent[props.type]
    const onItemClick = handleClick(props)
    return (
      <PaginationComponent onClick={onItemClick} {...props}>
        {props.value}
      </PaginationComponent>
    )
  }
}
