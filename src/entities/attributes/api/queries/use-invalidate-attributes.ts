import { useQueryClient } from '@tanstack/react-query'

export const useInvalidateAttributes = () => {
  const queryClient = useQueryClient()

  return () => {
    queryClient.invalidateQueries({ queryKey: ['attributes'] })
  }
}
