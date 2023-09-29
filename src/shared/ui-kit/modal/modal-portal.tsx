import * as DialogPrimitive from '@radix-ui/react-dialog'
import { classNames } from 'shared/utils'

export const ModalPortal = ({
  className,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal
    className={classNames(className)}
    {...props}
  />
)
ModalPortal.displayName = DialogPrimitive.Portal.displayName
