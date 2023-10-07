import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Button } from 'shared/ui-kit'
import IconClose from 'shared/assets/icons/close.svg'

export const DrawerClose = () => {
  return (
    <DialogPrimitive.Close asChild>
      <Button
        variant="ghost"
        size="xs"
        className="absolute top-4 right-4"
      >
        <IconClose className="h-6 w-6" />
      </Button>
    </DialogPrimitive.Close>
  )
}
