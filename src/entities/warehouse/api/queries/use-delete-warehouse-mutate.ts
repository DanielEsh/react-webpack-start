import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteWarehouse } from '../requests'

export const useDeleteWarehouseMutate = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteWarehouse,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['warehouses'],
      })
    },
  })
}
