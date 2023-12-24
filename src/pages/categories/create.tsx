import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useNavigate } from 'react-router-dom'
import {
  CategoryCreateForm,
  CATEGORY_CREATE_FORM_ID,
} from 'features/categories/create'

const CategoryCreatePage = () => {
  const navigate = useNavigate()

  const close = () => {
    navigate('/categories')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <div className="flex h-full flex-col">
        <DrawerHeader>
          <h2>Create category</h2>
        </DrawerHeader>

        <CategoryCreateForm onSuccessCreate={close} />

        <DrawerFooter>
          <div className="flex gap-2 px-4 pb-6">
            <Button
              type="submit"
              variant="primary"
              form={CATEGORY_CREATE_FORM_ID}
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

export default CategoryCreatePage
