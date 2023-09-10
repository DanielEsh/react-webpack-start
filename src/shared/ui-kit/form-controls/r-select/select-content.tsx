import { forwardRef, type ElementRef, ComponentPropsWithoutRef } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { classNames } from 'shared/utils/classNames'
import { Portal } from 'shared/ui-kit/Portal'

export const SelectContent = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <RadixSelectPrimitive.Portal>
    <RadixSelectPrimitive.Content
      ref={ref}
      className={classNames(
        'text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md',
        position === 'popper' &&
          'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
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
