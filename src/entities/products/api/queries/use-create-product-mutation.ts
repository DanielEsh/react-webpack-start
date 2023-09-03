import { useMutation } from '@tanstack/react-query'
import { createProduct } from '../requests'

export const useCreateProductMutation = () => {
  return useMutation({
    mutationFn: createProduct,
  })
}
