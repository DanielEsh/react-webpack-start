import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { BrandsCreateForm } from 'features/brands/create/brands-create-form'
import { useNavigate } from 'react-router-dom'
import { BRAND_CREATE_FORM_ID } from 'features/brands/create'

export default function BrandCreatePage() {
  const navigate = useNavigate()

  const close = () => {
    navigate('/brands')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <div className="flex h-full flex-col">
        <DrawerHeader>
          <h2>Create brand</h2>
        </DrawerHeader>

        <BrandsCreateForm onSuccessCreate={close} />

        <DrawerFooter>
          <div className="flex gap-2 px-4 pb-6">
            <Button
              type="submit"
              variant="primary"
              form={BRAND_CREATE_FORM_ID}
            >
              Создать
            </Button>

            <Button
              type="button"
              variant="ghost"
              onClick={close}
            >
              Отмена
            </Button>
          </div>
        </DrawerFooter>
      </div>
    </Drawer>
  )
}
