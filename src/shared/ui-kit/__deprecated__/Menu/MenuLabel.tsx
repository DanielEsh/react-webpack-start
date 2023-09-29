import { classNames } from 'shared/utils'
import type { UiDefaultProps } from 'shared/ui-kit/types'

const COMPONENT_NAME = 'MenuLabel'

type MenuLabelProps = UiDefaultProps

export const MenuLabel = (props: MenuLabelProps) => {
  const { children, className } = props

  const classes = classNames('rounded-md p-2 hover:bg-neutral-500', className)

  return <span className={classes}>{children}</span>
}

MenuLabel.displayName = COMPONENT_NAME
