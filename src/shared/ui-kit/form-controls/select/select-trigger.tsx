import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { classNames } from 'shared/utils/classNames'

export const SelectTrigger = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixSelectPrimitive.Trigger
    ref={ref}
    className={classNames('w-full', className)}
    {...props}
  >
    {children}
  </RadixSelectPrimitive.Trigger>
))
SelectTrigger.displayName = RadixSelectPrimitive.Trigger.displayName
