import { OrderForm } from 'entities/order/ui/order-form'
import { OrderDetailsDto } from 'entities/order/api/dto'
import { useUpdateOrderMutation } from 'entities/order/api/queries/use-update-order-mutation'
import { OrderFormSchema } from 'entities/order/ui/order-form/order-form-schema'
import { useNotification } from 'shared/notification'
import { OrderUpdateFields } from 'features/order/update/ui/order-update-fields'

interface Props {
  data?: OrderDetailsDto
  onSuccessUpdate(): void
}

export const OrderUpdateForm = ({ data, onSuccessUpdate }: Props) => {
  const { mutateAsync: updateOrder } = useUpdateOrderMutation()
  const { showNotification } = useNotification()

  const handleSuccessCreate = (data: OrderDetailsDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное обновление заказа',
      message: `Заказ ${data.number} обновлен`,
    })
    onSuccessUpdate()
  }
  const handleSubmit = async (form: OrderFormSchema) => {
    if (!data) {
      return
    }

    await updateOrder(
      {
        form: form,
        id: data.id,
      },
      {
        onSuccess: handleSuccessCreate,
      },
    )
  }

  return (
    <OrderForm
      fields={<OrderUpdateFields />}
      defaultValues={data}
      onSubmit={handleSubmit}
    />
  )
}
