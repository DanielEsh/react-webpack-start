import { useQueryClient } from '@tanstack/react-query'

export const useInvalidateProducts = () => {
  const queryClient = useQueryClient()

  return () => {
    queryClient.invalidateQueries({ queryKey: ['products'] })
  }
}
