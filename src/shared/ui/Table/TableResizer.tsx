import { Header } from '@tanstack/react-table'
import { classNames } from 'shared/utils'

export interface TableResizerProps {
  header: Header<any, unknown>
}

export const TableResizer = ({ header }: TableResizerProps) => {
  const handleResize = (event: any) => {
    const changeColumnSesizeFn = header.getResizeHandler()
    changeColumnSesizeFn(event)
  }

  const classes = classNames(
    'absolute top-0 right-0 w-1.5 h-full bg-red-500 cursor-col-resize opacity-0',
    {
      'bg-slate-300 opacity-100': header.column.getIsResizing(),
    },
  )

  return (
    <div
      className={classes}
      onTouchStart={(event) => handleResize(event)}
      onMouseDown={(event) => handleResize(event)}
    />
  )
}
