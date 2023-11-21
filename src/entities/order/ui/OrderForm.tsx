import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  orderFormSchema,
  type OrderFormSchema,
} from 'entities/order/ui/order-form/order-form-schema'
import { OrderFormFields } from 'entities/order/ui/order-form/fields/OrderFormFields'
import { OrderFormAccordion } from 'entities/order/ui/order-form/OrderFormAccordion'

export const OrderForm = () => {
  const orderFormDefaultValues: OrderFormSchema = {
    staff: 'staff',
    status: 'status',
    payment_status: 'payment_status',
    warehouse: 'warehouse',
    user_details: {
      firstName: '',
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

  const handleSubmit = (form: OrderFormSchema) => {
    console.log('submit', form)
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
