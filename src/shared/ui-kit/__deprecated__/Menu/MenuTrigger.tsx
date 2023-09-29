import { forwardRef } from 'react'
import { Popover } from 'shared/ui-kit/__deprecated__/Popover'
import { UiDefaultProps } from 'shared/ui-kit/types'

type MenuTriggerProps = UiDefaultProps

const COMPONENT_NAME = 'MenuTrigger'

export const MenuTrigger = forwardRef<HTMLDivElement, MenuTriggerProps>(
  ({ children }, forwardedRef) => {
    return <Popover.Trigger ref={forwardedRef}>{children}</Popover.Trigger>
  },
)

MenuTrigger.displayName = COMPONENT_NAME
