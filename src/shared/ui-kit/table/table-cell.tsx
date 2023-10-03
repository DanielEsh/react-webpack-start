import { TdHTMLAttributes } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> &
  UiDefaultProps

export const TableCell = ({
  className,
  children,
  ...restProps
}: TableCellProps) => {
  return (
    <td
      className={classNames(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...restProps}
    >
      {children}
    </td>
  )
}
