import { useNavigate } from 'react-router-dom'
import { Button, Drawer, Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  WarehouseForm,
  warehouseFormSchema,
} from 'entities/warehouse/ui/form/warehouse-form-schema'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { WarehouseFormFields } from 'entities/warehouse/ui/form/warehouse-form-fields'
import { useCreateWarehouseMutation } from 'entities/warehouse/api/queries/use-create-warehouse-mutation'
import { ProductDto } from 'entities/products'
import { useNotification } from 'shared/notification'

export default function WarehouseCreatePage() {
  const navigate = useNavigate()
  const { mutate: createWarehouseMutation } = useCreateWarehouseMutation()
  const { showNotification } = useNotification()
  const close = () => {
    navigate('/warehouses')
  }

  const defaultValues: WarehouseForm = {
    name: '',
  }

  const formMethods = useForm(warehouseFormSchema, defaultValues)

  const handleSuccessCreate = (data: ProductDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание склада',
      message: `Склад ${data.name} успешно создан`,
    })
    close()
  }

  const handleSubmit = async (form: any) => {
    createWarehouseMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
    })
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={handleSubmit}
      >
        <>
          <DrawerHeader>
            <h2>Create warehouse</h2>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-6">
            <WarehouseFormFields />
          </div>

          <DrawerFooter>
            <div className="flex gap-2 px-4 pb-6">
              <Button
                type="submit"
                variant="primary"
              >
                Create
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
        </>
      </Form>
    </Drawer>
  )
}
