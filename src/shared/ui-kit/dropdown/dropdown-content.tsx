import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Portal } from 'shared/ui-kit'

const COMPONENT_NAME = 'DropdownContent'

export const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, forwardedRef) => {
  const { children, ...restProps } = props

  return (
    <Portal>
      <DropdownMenuPrimitive.Content
        ref={forwardedRef}
        side="bottom"
        align="start"
        sideOffset={8}
        className="min-w-[8rem] overflow-hidden rounded-md border shadow-md"
        {...restProps}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </Portal>
  )
})

DropdownContent.displayName = COMPONENT_NAME
