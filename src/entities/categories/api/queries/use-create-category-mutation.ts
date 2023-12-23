import { useMutation } from '@tanstack/react-query'
import { createCategory } from 'entities/categories/api/requests'

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: createCategory,
  })
}
