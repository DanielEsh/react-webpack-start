import { useMutation } from '@tanstack/react-query'
import { deleteBrand } from '../requests'

export const useDeleteBrandMutation = () => {
  return useMutation({
    mutationFn: deleteBrand,
  })
}
