import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  warehouseFormSchema,
  WarehouseForm,
  WarehouseFormFields,
} from 'entities/warehouse'
import { useUpdateWarehouseByIdMutate } from 'entities/warehouse/api/queries/use-update-warehouse-by-id-mutate'
import { WarehouseDto } from 'entities/warehouse/api/dto'
import { useNotification } from 'shared/notification'
import { WAREHOUSE_UPDATE_FORM_ID } from 'features/warehouse/update/constants'

interface Props {
  id: number
  defaultValues: WarehouseForm
  onSuccessUpdate(): void
}

export const WarehouseUpdateForm = ({
  id,
  defaultValues,
  onSuccessUpdate,
}: Props) => {
  const formMethods = useForm(warehouseFormSchema, defaultValues)
  const { mutateAsync: updateWarehouseByIdMutate } =
    useUpdateWarehouseByIdMutate()
  const { showNotification } = useNotification()

  const handleSuccessUpdate = (data: WarehouseDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное обновление склада',
      message: `Склад ${data.name} успешно обновлен`,
    })
    onSuccessUpdate()
  }

  const handleSubmit = async (form: WarehouseForm) => {
    await updateWarehouseByIdMutate(
      {
        form,
        id,
      },
      {
        onSuccess: handleSuccessUpdate,
      },
    )
  }

  return (
    <Form
      id={WAREHOUSE_UPDATE_FORM_ID}
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <WarehouseFormFields />
    </Form>
  )
}
