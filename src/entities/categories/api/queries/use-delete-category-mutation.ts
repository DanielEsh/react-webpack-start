import { useMutation } from '@tanstack/react-query'
import { deleteCategory } from 'entities/categories/api/requests'

export const useDeleteCategoryMutation = () => {
  return useMutation({
    mutationFn: deleteCategory,
  })
}
