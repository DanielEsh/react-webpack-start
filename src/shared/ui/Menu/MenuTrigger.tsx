import { forwardRef, PropsWithChildren } from 'react'
import { Popover } from 'shared/ui/Popover'

type MenuTriggerProps = PropsWithChildren

const COMPONENT_NAME = 'MenuTrigger'

export const MenuTrigger = forwardRef<HTMLDivElement, MenuTriggerProps>(
  ({ children }, forwardedRef) => {
    return <Popover.Trigger ref={forwardedRef}>{children}</Popover.Trigger>
  },
)

MenuTrigger.displayName = COMPONENT_NAME
