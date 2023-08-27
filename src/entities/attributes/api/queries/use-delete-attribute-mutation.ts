import { useMutation } from '@tanstack/react-query'
import { deleteAttribute } from '../requests'

export const useDeleteAttributeMutation = () => {
  return useMutation({
    mutationFn: deleteAttribute,
  })
}
