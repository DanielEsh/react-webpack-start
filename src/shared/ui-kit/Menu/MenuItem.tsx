import { classNames } from 'shared/utils'
import type { UiDefaultProps } from 'shared/ui-kit/types'

const COMPONENT_NAME = 'MenuItem'

type MenuItemProps = UiDefaultProps

export const MenuItem = (props: MenuItemProps) => {
  const { children, className } = props

  const classes = classNames('rounded-md p-2 hover:bg-neutral-500', className)

  return <li className={classes}>{children}</li>
}

MenuItem.displayName = COMPONENT_NAME
