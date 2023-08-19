import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryBySlug,
  updateCategoryBySlug,
} from './requests'
import { CategoryForm } from '../ui/form/types'

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

export const useUpdateCategoryMutation = () => {
  return useMutation({
    mutationFn: ({ form, slug }: { form: CategoryForm; slug: string }) => {
      console.log('FORM', form)
      return updateCategoryBySlug(form, slug)
    },
  })
}

export const useDeleteCategoryMutation = () => {
  return useMutation({
    mutationFn: deleteCategory,
  })
}

export const useInvalidateCategories = () => {
  const queryClient = useQueryClient()

  const invalidateCategories = () => {
    queryClient.invalidateQueries({ queryKey: ['categories'] })
  }

  return {
    invalidateCategories,
  }
}
