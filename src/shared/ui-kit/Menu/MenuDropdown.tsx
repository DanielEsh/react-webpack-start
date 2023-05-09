import { forwardRef, PropsWithChildren } from 'react'
import { Popover } from 'shared/ui-kit/Popover'

type MenuDropdownProps = PropsWithChildren

const COMPONENT_NAME = 'MenuDropdown'

export const MenuDropdown = forwardRef<HTMLDivElement, MenuDropdownProps>(
  ({ children }, forwardedRef) => {
    return (
      <Popover.Floating ref={forwardedRef}>
        <ul className="flex flex-col rounded-md bg-neutral-800 p-2 text-white">
          {children}
        </ul>
      </Popover.Floating>
    )
  },
)

MenuDropdown.displayName = COMPONENT_NAME
