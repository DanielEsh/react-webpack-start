import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createStaff } from '../requests'

export const useCreateStaffMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createStaff,
    onSuccess: () => {
      queryClient.refetchQueries({
        queryKey: ['staff'],
      })
    },
  })
}
