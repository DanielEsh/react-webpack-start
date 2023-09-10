import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { classNames } from 'shared/utils/classNames'

export const SelectLabel = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Label>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <RadixSelectPrimitive.Label
    ref={ref}
    className={classNames('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
))
SelectLabel.displayName = RadixSelectPrimitive.Label.displayName
