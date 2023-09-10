import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { classNames } from 'shared/utils/classNames'
import CheckIcon from 'shared/assets/icons/check.svg'

export const SelectItem = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <RadixSelectPrimitive.Item
    ref={ref}
    className={classNames(
      'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <RadixSelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </RadixSelectPrimitive.ItemIndicator>
    </span>

    <RadixSelectPrimitive.ItemText>{children}</RadixSelectPrimitive.ItemText>
  </RadixSelectPrimitive.Item>
))
SelectItem.displayName = RadixSelectPrimitive.Item.displayName
