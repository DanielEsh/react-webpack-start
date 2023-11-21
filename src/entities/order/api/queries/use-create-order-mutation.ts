import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createOrder } from '../requests'

export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['order'],
      })
    },
  })
}
