import { useMutation } from '@tanstack/react-query'
import { updateBrandBySlug } from '../requests'
import { BrandDto } from '../types'

export const useUpdateBrandMutation = () => {
  return useMutation({
    mutationFn: ({ form, slug }: { form: BrandDto; slug: string }) => {
      return updateBrandBySlug(form, slug)
    },
  })
}
