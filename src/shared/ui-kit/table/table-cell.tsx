import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const TableCell = ({ className, children }: UiDefaultProps) => {
  return (
    <td
      className={classNames(
        'p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
    >
      {children}
    </td>
  )
}
