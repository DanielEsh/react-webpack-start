import type { ReactNode } from 'react'

export interface TableCellHead {
  children: ReactNode
  className: string
}

export const TableCellHead = (props: TableCellHead) => {
  const { children, className, ...restProps } = props

  return (
    <th className={className} {...restProps}>
      {children}
    </th>
  )
}
