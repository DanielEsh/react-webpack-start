import { useNavigate } from 'react-router-dom'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import {
  WarehouseCreateForm,
  WAREHOUSE_CREATE_FORM_ID,
} from 'features/warehouse/create'

export default function WarehouseCreatePage() {
  const navigate = useNavigate()

  const close = () => {
    navigate('/warehouses')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <div className="flex h-full flex-col">
        <DrawerHeader>
          <h2>Create warehouse</h2>
        </DrawerHeader>

        <div className="flex flex-col gap-4 px-6">
          <WarehouseCreateForm onSuccessCreate={close} />
        </div>

        <DrawerFooter>
          <div className="flex gap-2 px-4 pb-6">
            <Button
              type="submit"
              variant="primary"
              form={WAREHOUSE_CREATE_FORM_ID}
            >
              Создать
            </Button>

            <Button
              type="button"
              variant="ghost"
              onClick={close}
            >
              Отменить
            </Button>
          </div>
        </DrawerFooter>
      </div>
    </Drawer>
  )
}
