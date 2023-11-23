import { useNavigate } from 'react-router-dom'
import {
  WarehouseForm,
  warehouseFormSchema,
} from 'entities/warehouse/ui/form/warehouse-form-schema'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Button, Drawer, Form } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'

export default function StaffCreatePage() {
  const navigate = useNavigate()
  const close = () => {
    navigate('/staff')
  }

  const formMethods = useForm(warehouseFormSchema)

  const handleSubmit = async (form: any) => {
    console.log('SUBMIT')
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
            <h2>Create staff</h2>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-6">
            <div>body</div>
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
