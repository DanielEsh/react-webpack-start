import { useNavigate } from 'react-router-dom'

import { useForm } from 'shared/ui-kit/form/use-form'
import { Button, Drawer, Form } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { StaffFormFields } from 'entities/staff/ui/form/staff-form-fields'
import {
  staffFormSchema,
  type StaffFormSchema,
} from 'entities/staff/ui/form/staff-form-schema'
import { useCreateStaffMutation } from 'entities/staff/api/queries/use-create-staff-mutation'

export default function StaffCreatePage() {
  const navigate = useNavigate()
  const { mutateAsync: createStaff } = useCreateStaffMutation()
  const close = () => {
    navigate('/staff')
  }

  const formMethods = useForm(staffFormSchema)

  const handleSubmit = async (form: StaffFormSchema) => {
    await createStaff(form, {
      onSuccess: close,
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
            <h2>Create staff</h2>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-6">
            <StaffFormFields />
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
