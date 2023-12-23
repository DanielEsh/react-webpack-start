import { useQueryClient } from '@tanstack/react-query'

export const useInvalidateCategories = () => {
  const queryClient = useQueryClient()

  return async () => {
    await queryClient.invalidateQueries({ queryKey: ['categories'] })
  }
}
