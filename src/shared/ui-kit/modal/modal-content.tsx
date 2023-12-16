import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ModalOverlay } from './modal-overlay'
import { classNames } from 'shared/utils'
import { Portal } from 'shared/ui-kit'

export const ModalContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <Portal>
    <>
      <ModalOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={classNames(
          'fixed left-[50%] top-[50%] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </>
  </Portal>
))
ModalContent.displayName = DialogPrimitive.Content.displayName
