import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const TableRow = ({ className, children }: UiDefaultProps) => {
  return (
    <tr
      className={classNames(
        'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
        className,
      )}
    >
      {children}
    </tr>
  )
}
