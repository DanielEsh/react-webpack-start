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

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetCategories = (values: Values) => {
  return useQuery({
    queryKey: ['categories', values],
    queryFn: () => getCategories(values),
    keepPreviousData: true,
    onSuccess: (data) => {
      console.log('success', data)
    },
  })
}

export const useGetCategoryDetails = (slug: string) => {
  console.log('useGetCategoryDetails')
  return useQuery({
    queryKey: ['categories', slug],
    queryFn: () => getCategoryBySlug(slug),
    retry: 1,
    onSuccess: (data) => console.log('DATA', data),
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
