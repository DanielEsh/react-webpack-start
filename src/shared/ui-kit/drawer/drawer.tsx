import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { classNames } from 'shared/utils/classNames'
import { Modal } from '../modal'
import { DrawerClose } from './drawer-close'

const drawerVariants = cva('fixed overflow-auto z-50 bg-white shadow-lg', {
  variants: {
    side: {
      top: 'inset-x-0 top-0 border-b',
      bottom: 'inset-x-0 bottom-0 border-t',
      left: 'inset-y-0 left-0 h-full w-[680px] border-r',
      right:
        'left-[100%] top-0 right-0 bottom-0 h-full min-w-[680px] -translate-x-[100%] translate-y-[0%]',
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

interface DrawerContentProps
  extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
    VariantProps<typeof drawerVariants> {
  open: boolean
  onOpenChange?(): void
}

const COMPONENT_NAME = 'Drawer'

const Drawer = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentProps
>(
  (
    { side = 'right', className, children, open, onOpenChange, ...props },
    ref,
  ) => (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      className={classNames(drawerVariants({ side }), className)}
    >
      <div
        ref={ref}
        {...props}
      >
        {children}
        <DrawerClose />
      </div>
    </Modal>
  ),
)
Drawer.displayName = COMPONENT_NAME

export { Drawer }
