import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { classNames } from 'shared/utils/classNames'
import { Modal } from '../modal'

const drawerVariants = cva(
  'fixed overflow-auto z-50 gap-4 bg-white shadow-lg',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-[680px] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'left-1/2 top-0 right-0 bottom-0 h-full min-w-[680px] border-l sm:max-w-sm RIGHT translate-x-[50%] translate-y-[0%]',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

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
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
          <span>Close</span>
        </DialogPrimitive.Close>
      </div>
    </Modal>
  ),
)
Drawer.displayName = COMPONENT_NAME

export { Drawer }
