import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const TableColumnHeader = ({ className, children }: UiDefaultProps) => {
  return (
    <th
      className={classNames(
        'h-10 px-2 text-left align-middle font-medium',
        className,
      )}
    >
      {children}
    </th>
  )
}
