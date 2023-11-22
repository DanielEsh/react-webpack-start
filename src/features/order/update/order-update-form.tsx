import { OrderForm } from 'entities/order/ui/OrderForm'
import { OrderFormSchema } from 'entities/order/ui/order-form/order-form-schema'

interface Props {
  form?: OrderFormSchema
}

export const OrderUpdateForm = ({ form }: Props) => {
  const handleSubmit = () => {
    console.log('UPDATE')
  }

  return (
    <OrderForm
      defaultValues={form}
      onSubmit={handleSubmit}
    />
  )
}
