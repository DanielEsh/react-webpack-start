import { forwardRef } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ModalContent } from './modal-content'
import { UiDefaultProps } from '../types'

export interface ModalProps extends UiDefaultProps {
  open: boolean
  persistent?: boolean
  onClose?(): void
}

const COMPONENT_NAME = 'Modal'

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (props, forwardedRef) => {
    const { children, open } = props

    return (
      <DialogPrimitive.Root open={open}>
        <ModalContent ref={forwardedRef}>{children}</ModalContent>
      </DialogPrimitive.Root>
    )
  },
)

Modal.displayName = COMPONENT_NAME
