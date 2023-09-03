import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../requests'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetProducts = (values: Values) => {
  return useQuery({
    queryKey: ['products', values],
    queryFn: () => getProducts(values),
    keepPreviousData: true,
  })
}
