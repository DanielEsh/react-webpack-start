import { useMutation } from '@tanstack/react-query'
import { updateBrandBySlug } from '../requests'
import { BrandForm } from 'entities/brands/ui/form/types'

export const useUpdateBrandMutation = () => {
  return useMutation({
    mutationFn: ({ form, slug }: { form: BrandForm; slug: string }) => {
      return updateBrandBySlug(form, slug)
    },
  })
}
