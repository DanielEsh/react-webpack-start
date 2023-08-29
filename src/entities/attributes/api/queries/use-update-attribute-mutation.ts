import { useMutation } from '@tanstack/react-query'
import { updateAttributeById } from '../requests'
import { AttributeForm } from 'entities/attributes/ui/form/types'

export const useUpdateAttributeMutatuin = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: AttributeForm; id: number }) => {
      return updateAttributeById(form, id)
    },
  })
}
