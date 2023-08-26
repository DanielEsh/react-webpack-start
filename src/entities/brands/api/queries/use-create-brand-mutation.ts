import { useMutation } from '@tanstack/react-query'
import { createBrand } from '../requests'

export const useCreateBrandMutation = () => {
  return useMutation({
    mutationFn: createBrand,
  })
}
