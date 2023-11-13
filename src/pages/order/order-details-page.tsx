import { useNavigate } from 'react-router-dom'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'

export default function OrderDetailsPage() {
  const navigate = useNavigate()

  const close = () => {
    navigate('/orders')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <DrawerHeader>
        <h2>Order details</h2>
      </DrawerHeader>

      <div className="p-4">orders</div>

      <DrawerFooter>
        <div className="flex gap-2 px-4 pb-6">
          <Button
            type="submit"
            variant="primary"
          >
            Update
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={close}
          >
            Cancel
          </Button>
        </div>
      </DrawerFooter>
    </Drawer>
  )
}
