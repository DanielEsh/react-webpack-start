import { forwardRef } from 'react'
import { Popover } from 'shared/ui-kit/Popover'
import { TypeWithChidlren } from 'shared/ui-kit/types'

type MenuTriggerProps = TypeWithChidlren

const COMPONENT_NAME = 'MenuTrigger'

export const MenuTrigger = forwardRef<HTMLDivElement, MenuTriggerProps>(
  ({ children }, forwardedRef) => {
    return <Popover.Trigger ref={forwardedRef}>{children}</Popover.Trigger>
  },
)

MenuTrigger.displayName = COMPONENT_NAME
