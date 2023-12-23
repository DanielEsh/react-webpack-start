import { useQuery } from '@tanstack/react-query'
import { getCategoryById } from 'entities/categories/api/requests'

export const useGetCategoryByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ['categories', id],
    queryFn: () => getCategoryById(id),
  })
}
