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

  const orderFormDefaultValues: OrderFormSchema = {
    staff: '',
    status: '',
    payment_status: null,
    warehouse: '',
    user_details: {
      firstName: 'firstName',
      lastName: 'lastName',
      middleName: 'middleName',
      email: 'email',
      phone: 'phone',
      comment: 'comment',
    },
    delivery_details: {
      city: 'city',
      country: 'country',
      zip_code: 'zip_code',
      street: 'street',
      house: 'house',
      building: 'building',
      apartment_office: 'apartment_office',
    },
  }

  return (
    <OrderForm
      defaultValues={orderFormDefaultValues}
      onSubmit={handleSubmit}
    />
  )
}
