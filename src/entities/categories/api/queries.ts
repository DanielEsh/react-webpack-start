import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCategory } from './requests'

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: createCategory,
  })
}

export const useUpdateCollections = () => {
  const queryClient = useQueryClient()

  const updateCategories = () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
  }

  return {
    updateCategories,
  }
}
