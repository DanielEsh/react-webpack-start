import { useMutation } from '@tanstack/react-query'
import { createAttribute } from '../requests'

export const useCreateAttributeMutation = () => {
  return useMutation({
    mutationFn: createAttribute,
  })
}
