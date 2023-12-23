import { useMutation } from '@tanstack/react-query'
import { CategoryForm } from 'entities/categories/ui/form/types'
import { updateCategoryById } from 'entities/categories/api/requests'

export const useUpdateCategoryMutation = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: CategoryForm; id: number }) => {
      return updateCategoryById(form, id)
    },
  })
}
