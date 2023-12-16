import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { classNames } from 'shared/utils/classNames'

export const SelectContent = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <RadixSelectPrimitive.Portal>
    <RadixSelectPrimitive.Content
      ref={ref}
      className={classNames(
        'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md',
        position === 'popper' && '',
        className,
      )}
      position={position}
      {...props}
    >
      <RadixSelectPrimitive.Viewport
        className={classNames(
          'p-1',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </RadixSelectPrimitive.Viewport>
    </RadixSelectPrimitive.Content>
  </RadixSelectPrimitive.Portal>
))
SelectContent.displayName = RadixSelectPrimitive.Content.displayName
