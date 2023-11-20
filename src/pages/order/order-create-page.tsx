import { useNavigate } from 'react-router-dom'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'

export default function OrderCreatePage() {
  const navigate = useNavigate()

  const close = () => {
    navigate('/orders')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <div className="flex h-full flex-col">
        <DrawerHeader>
          <h2>Create order</h2>
        </DrawerHeader>

        <div className="p-4">
          <div>data</div>
        </div>

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
      </div>
    </Drawer>
  )
}
