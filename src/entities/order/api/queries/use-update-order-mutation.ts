import { useMutation } from '@tanstack/react-query'
import { updateOrder } from '../requests'
import { OrderFormSchema } from 'entities/order/ui/order-form/order-form-schema'

export const useUpdateOrderMutation = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: OrderFormSchema; id: number }) => {
      return updateOrder(form, id)
    },
  })
}
