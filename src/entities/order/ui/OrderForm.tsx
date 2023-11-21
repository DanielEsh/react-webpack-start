import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import { useNotification } from 'shared/notification'
import {
  orderFormSchema,
  type OrderFormSchema,
} from 'entities/order/ui/order-form/order-form-schema'
import { OrderFormFields } from 'entities/order/ui/order-form/fields/OrderFormFields'
import { OrderFormAccordion } from 'entities/order/ui/order-form/OrderFormAccordion'
import { useCreateOrderMutation } from 'entities/order/api/queries/use-create-order-mutation'
import { OrderDto } from 'entities/order/api/dto'

interface Props {
  onSuccessCreate(): void
}

export const OrderForm = ({ onSuccessCreate }: Props) => {
  const { mutateAsync: createOrderMutation } = useCreateOrderMutation()
  const { showNotification } = useNotification()

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

  const methods = useForm(orderFormSchema, orderFormDefaultValues)

  const handleSuccessCreate = (data: OrderDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание заказа',
      message: `Заказ ${data.number} успешно создан`,
    })
    onSuccessCreate()
  }

  const handleSubmit = async (form: OrderFormSchema) => {
    console.log('submit', form)
    await createOrderMutation(form, {
      onSuccess: handleSuccessCreate,
    })
  }

  return (
    <Form
      id="order-form"
      methods={methods}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-4 p-4">
        <OrderFormFields />
      </div>

      <OrderFormAccordion />
    </Form>
  )
}
