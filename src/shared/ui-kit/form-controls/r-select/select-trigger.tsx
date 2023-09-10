import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import ChevronDownIcon from 'shared/assets/icons/chevron-down.svg'
import { classNames } from 'shared/utils/classNames'

export const SelectTrigger = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <RadixSelectPrimitive.Trigger
    ref={ref}
    className={classNames(
      'border-input bg-background ring-offset-background focus:ring-ring flex h-10 w-full items-center justify-between rounded-md border px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
  >
    {children}
    <RadixSelectPrimitive.Icon asChild>
      <ChevronDownIcon className="h-4 w-4 opacity-50" />
    </RadixSelectPrimitive.Icon>
  </RadixSelectPrimitive.Trigger>
))
SelectTrigger.displayName = RadixSelectPrimitive.Trigger.displayName
