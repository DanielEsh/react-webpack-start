import { useMutation } from '@tanstack/react-query'
import { updateBrandById } from '../requests'
import { BrandForm } from 'entities/brands/ui/brands-form/types'

export const useUpdateBrandMutation = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: BrandForm; id: number }) => {
      return updateBrandById(form, id)
    },
  })
}
