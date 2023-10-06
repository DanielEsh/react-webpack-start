import { ThHTMLAttributes } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export type TableColumnHeaderProps = ThHTMLAttributes<HTMLTableCellElement> &
  UiDefaultProps

export const TableColumnHeader = ({
  className,
  children,
  ...restProps
}: TableColumnHeaderProps) => {
  return (
    <th
      className={classNames(
        'h-10 px-2 text-left align-middle font-medium',
        className,
      )}
      {...restProps}
    >
      {children}
    </th>
  )
}
