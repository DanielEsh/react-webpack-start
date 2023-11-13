import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { TableHead } from './table-head'
import { TableBody } from './table-body'
import { TableRow } from './table-row'
import { TableColumnHeader } from './table-column-header'
import { TableCell } from './table-cell'

export const _Table = ({ children, className }: UiDefaultProps) => {
  return (
    <div className={classNames(className, 'rounded-md border')}>
      <table className="caption-bottom relative w-full text-sm">
        {children}
      </table>
    </div>
  )
}

export const Table = Object.assign(_Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  ColumnHeader: TableColumnHeader,
  Cell: TableCell,
})
