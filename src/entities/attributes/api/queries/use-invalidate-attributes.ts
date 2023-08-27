import { useQueryClient } from '@tanstack/react-query'

export const useInvalidateAttributes = () => {
  const queryClient = useQueryClient()

  const invalidateAttributes = () => {
    queryClient.invalidateQueries({ queryKey: ['attributes'] })
  }

  return {
    invalidateAttributes,
  }
}
