import { useMutation } from '@tanstack/react-query'
import { updateAttributeById } from '../requests'

export const useUpdateAttributeMutatuin = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: any; id: number }) => {
      return updateAttributeById(form, id)
    },
  })
}
