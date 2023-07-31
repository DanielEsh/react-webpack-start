import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

type SelectLabelProps = UiDefaultProps

export const SelectLabel = (props: SelectLabelProps) => {
  const { className, children } = props

  const classes = classNames(
    'py-1.5 pl-2 pr-2 text-sm font-semibold',
    className,
  )

  return <span className={classes}>{children}</span>
}
