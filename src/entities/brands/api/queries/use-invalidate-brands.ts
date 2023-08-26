import { useQueryClient } from '@tanstack/react-query'

export const useInvalidateBrands = () => {
  const queryClient = useQueryClient()

  const invalidateBrands = () => {
    queryClient.invalidateQueries({ queryKey: ['brands'] })
  }

  return {
    invalidateBrands,
  }
}
