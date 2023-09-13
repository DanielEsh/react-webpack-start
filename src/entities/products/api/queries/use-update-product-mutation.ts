import { useMutation } from '@tanstack/react-query'
import { updateProductById } from '../requests'
import { ProductForm } from '../../ui/form/product-form-schema'

export const useUpdateProductById = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: ProductForm; id: number }) => {
      return updateProductById(form, id)
    },
  })
}
