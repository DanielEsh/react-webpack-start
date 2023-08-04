import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const TableBody = ({ className, children }: UiDefaultProps) => {
  return (
    <tbody className={classNames('[&_tr:last-child]:border-0', className)}>
      {children}
    </tbody>
  )
}
