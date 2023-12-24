import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import { warehouseFormSchema, WarehouseFormFields } from 'entities/warehouse'
import { ProductDto } from 'entities/products'
import { useCreateWarehouseMutation } from 'entities/warehouse/api/queries'
import { useNotification } from 'shared/notification'
import { WAREHOUSE_CREATE_FORM_ID } from './constants'

interface Props {
  onSuccessCreate(): void
}

export const WarehouseCreateForm = ({ onSuccessCreate }: Props) => {
  const formMethods = useForm(warehouseFormSchema)
  const { mutate: createWarehouseMutation } = useCreateWarehouseMutation()
  const { showNotification } = useNotification()

  const handleSuccessCreate = (data: ProductDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание склада',
      message: `Склад ${data.name} успешно создан`,
    })
    onSuccessCreate()
  }

  const handleSubmit = async (form: any) => {
    createWarehouseMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
    })
  }

  return (
    <Form
      id={WAREHOUSE_CREATE_FORM_ID}
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <WarehouseFormFields />
    </Form>
  )
}
