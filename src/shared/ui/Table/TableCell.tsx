import type { ReactNode } from 'react'

export interface TableCell {
  children: ReactNode
  className: string
}

export const TableCell = (props: TableCell) => {
  const { children, className, ...restProps } = props

  return (
    <td className={className} {...restProps}>
      {children}
    </td>
  )
}
