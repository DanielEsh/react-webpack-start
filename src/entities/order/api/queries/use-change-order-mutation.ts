import { useMutation, useQueryClient } from '@tanstack/react-query'
import { changeOrderStatus } from 'entities/order/api/requests'

export interface ChangeOrderStatus {
  staff: number
  expectedStatus: string
}

export const useChangeOrderMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ form, id }: { form: ChangeOrderStatus; id: number }) => {
      return changeOrderStatus(form, id)
    },
    onSuccess: ({ id }) => {
      queryClient.refetchQueries({
        queryKey: ['order', id],
      })
    },
  })
}
