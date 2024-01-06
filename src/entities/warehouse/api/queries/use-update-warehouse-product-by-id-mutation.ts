import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateWarehouseProductById } from '../requests'
import { WarehouseProductsForm } from '../../ui/warehouse-products-table/warehouse-product-schema'

export const useUpdateWarehouseProductByIdMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ form, id }: { form: WarehouseProductsForm; id: number }) => {
      return updateWarehouseProductById(id, form)
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: ['warehouseProducts'],
      })
    },
  })
}