import { TypeWithChildren } from 'shared/ui-kit/types'
import { TableHead } from './table-head'
import { TableBody } from './table-body'
import { TableRow } from './table-row'
import { TableColumnHeader } from './table-column-header'
import { TableCell } from './table-cell'

export const _Table = ({ children }: TypeWithChildren) => {
  return (
    <div className="rounded-md border">
      <div className="w-full">
        <table className="caption-bottom relative w-full text-sm">
          {children}
        </table>
      </div>
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
