import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteWarehouseProduct } from '../requests'

export const useDeleteWarehouseMutate = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteWarehouseProduct,
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['warehouseProducts'],
      })
    },
  })
}
