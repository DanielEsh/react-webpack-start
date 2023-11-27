import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const COMPONENT_NAME = 'DropdownContent'

export const DropdownContent = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>((props, forwardedRef) => {
  const { children, ...restProps } = props

  return (
    <DropdownMenuPrimitive.Content
      ref={forwardedRef}
      side="bottom"
      align="start"
      {...restProps}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  )
})

DropdownContent.displayName = COMPONENT_NAME
