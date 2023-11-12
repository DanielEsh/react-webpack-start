import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateWarehouseById } from '../requests'
import { WarehouseForm } from '../../ui/form/warehouse-form-schema'

export const useUpdateWarehouseByIdMutate = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ form, id }: { form: WarehouseForm; id: number }) => {
      return updateWarehouseById(form, id)
    },
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['warehouses'],
      })
    },
  })
}
