import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const TableHead = ({ className, children }: UiDefaultProps) => {
  return (
    <thead className={classNames('[&_tr]:border-b', className)}>
      {children}
    </thead>
  )
}
