import { classNames } from 'shared/utils'

export interface DividerProps {
  className?: string
}

export const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      role="none"
      className={classNames('h-[1px] w-full shrink-0 bg-border', className)}
    />
  )
}
