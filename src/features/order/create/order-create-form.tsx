import { OrderForm } from 'entities/order/ui/OrderForm'
import { OrderFormSchema } from 'entities/order/ui/order-form/order-form-schema'
import { useCreateOrderMutation } from 'entities/order/api/queries/use-create-order-mutation'
import { useNotification } from 'shared/notification'
import { OrderDto } from 'entities/order/api/dto'

interface Props {
  onSuccessCreate(): void
}

export const OrderCreateForm = ({ onSuccessCreate }: Props) => {
  const { mutateAsync: createOrderMutation } = useCreateOrderMutation()
  const { showNotification } = useNotification()

  const handleSuccessCreate = (data: OrderDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание заказа',
      message: `Заказ ${data.number} успешно создан`,
    })
    onSuccessCreate()
  }
  const handleSubmit = async (form: OrderFormSchema) => {
    await createOrderMutation(form, {
      onSuccess: handleSuccessCreate,
    })
  }

  return <OrderForm onSubmit={handleSubmit} />
}
