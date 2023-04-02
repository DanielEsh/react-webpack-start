import { type PaginationModel } from './types'
import { PaginationElement } from './PaginationElements'

export const renderPaginationElements = (
  onChangeCb?: (value: number) => void,
) => {
  const handleClick = ({ value }: PaginationModel) => {
    return () => (onChangeCb ? onChangeCb(value) : null)
  }

  return (props: PaginationModel) => {
    const onItemClick = handleClick(props)
    return (
      <PaginationElement
        onClick={onItemClick}
        {...props}
      />
    )
  }
}
