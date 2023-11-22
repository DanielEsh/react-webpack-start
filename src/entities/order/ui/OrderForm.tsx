import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  orderFormSchema,
  type OrderFormSchema,
} from 'entities/order/ui/order-form/order-form-schema'
import { OrderFormFields } from 'entities/order/ui/order-form/fields/OrderFormFields'
import { OrderFormAccordion } from 'entities/order/ui/order-form/OrderFormAccordion'

interface Props {
  defaultValues?: OrderFormSchema
  onSubmit(form: OrderFormSchema): void
}

export const OrderForm = ({ defaultValues, onSubmit }: Props) => {
  const methods = useForm(orderFormSchema, defaultValues)

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
