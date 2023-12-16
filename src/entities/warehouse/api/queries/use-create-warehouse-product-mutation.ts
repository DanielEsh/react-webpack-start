import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createWarehouseProduct } from '../requests'

export const useCreateWarehouseProductMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createWarehouseProduct,
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['warehouseProducts'],
      })
    },
  })
}
