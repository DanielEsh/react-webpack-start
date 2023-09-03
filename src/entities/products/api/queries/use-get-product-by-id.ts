import { useQuery } from '@tanstack/react-query'
import { getProductById } from '../requests'

export const useGetProductsById = (id: number) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProductById(id),
  })
}
