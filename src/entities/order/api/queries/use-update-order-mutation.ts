import { useMutation } from '@tanstack/react-query'
import { updateOrder } from '../requests'
import { OrderDto } from 'entities/order/api/dto'

export const useUpdateProductById = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: OrderDto; id: number }) => {
      return updateOrder(form, id)
    },
  })
}
