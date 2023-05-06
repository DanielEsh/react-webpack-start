import { useQueryClient } from '@tanstack/react-query'

export const useUpdateCollectionsList = () => {
  const queryClient = useQueryClient()

  const updateCollectionsList = () => {
    queryClient.invalidateQueries({ queryKey: ['collections'] })
  }

  return {
    updateCollectionsList,
  }
}
