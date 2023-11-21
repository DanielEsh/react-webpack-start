import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  orderFormSchema,
  type OrderFormSchema,
} from 'entities/order/ui/order-form/order-form-schema'
import { OrderFormFields } from 'entities/order/ui/order-form/fields/OrderFormFields'
import { OrderFormAccordion } from 'entities/order/ui/order-form/OrderFormAccordion'

interface Props {
  onSubmit(form: OrderFormSchema): void
}

export const OrderForm = ({ onSubmit }: Props) => {
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

  const handleSubmit = async (form: OrderFormSchema) => {
    onSubmit(form)
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
