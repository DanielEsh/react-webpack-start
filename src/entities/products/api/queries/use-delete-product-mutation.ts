import { useMutation } from '@tanstack/react-query'
import { deleteProductsById } from '../requests'

export const useDeleteProductMutation = () => {
  return useMutation({
    mutationFn: deleteProductsById,
  })
}
