import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const COMPONENT_NAME = 'DropdownItem'

export const DropdownItem = forwardRef<
  ElementRef<typeof DropdownMenuPrimitive.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>((props, forwardedRef) => {
  const { children, ...restProps } = props

  return (
    <DropdownMenuPrimitive.Item
      ref={forwardedRef}
      {...restProps}
    >
      {children}
    </DropdownMenuPrimitive.Item>
  )
})

DropdownItem.displayName = COMPONENT_NAME
