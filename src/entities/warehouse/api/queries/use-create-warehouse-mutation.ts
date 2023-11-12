import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createWarehouse } from '../requests'

export const useCreateWarehouseMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createWarehouse,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['warehouses'],
      })
    },
  })
}
