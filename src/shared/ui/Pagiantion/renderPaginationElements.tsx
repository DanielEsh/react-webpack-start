import {
  PaginationElementProps,
  PaginationElementsType,
  type PaginationModel,
} from './types'
import {
  PagiantionEllipsisLink,
  PagiantionFirstLink,
  PagiantionLastLink,
  PagiantionPreviousLink,
  PaginationNextLink,
  PaginationPageLink,
} from './PaginationElements'

export const renderPaginationElements = (
  onChangeCb?: (value: number) => void,
) => {
  const itemTypeToComponent: Record<
    PaginationElementsType,
    (props: PaginationElementProps) => JSX.Element
  > = {
    [PaginationElementsType.PAGE]: PaginationPageLink,
    [PaginationElementsType.ELLIPSIS]: PagiantionEllipsisLink,
    [PaginationElementsType.FIRST]: PagiantionFirstLink,
    [PaginationElementsType.PREVIOUS]: PagiantionPreviousLink,
    [PaginationElementsType.NEXT]: PaginationNextLink,
    [PaginationElementsType.LAST]: PagiantionLastLink,
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
