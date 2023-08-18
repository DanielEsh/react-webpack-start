import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { createCategory, getCategories, getCategoryBySlug } from './requests'

export const useCreateCategoryMutation = () => {
  return useMutation({
    mutationFn: createCategory,
  })
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => getCategories(),
    keepPreviousData: true,
    onSuccess: (data) => {
      console.log('success', data)
    },
  })
}

export const useGetCategoryDetails = (slug: string) => {
  return useQuery({
    queryKey: ['collections', slug],
    queryFn: () => getCategoryBySlug(slug),
    retry: 1,
  })
}

export const useUpdateCategories = () => {
  const queryClient = useQueryClient()

  const updateCategories = () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
  }

  return {
    updateCategories,
  }
}
