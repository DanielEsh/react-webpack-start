import { useQuery } from '@tanstack/react-query'
import { getOrders } from '../requests'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetAllOrdersQuery = (values: Values) => {
  return useQuery({
    queryKey: ['order', values],
    queryFn: () => getOrders(values),
    keepPreviousData: true,
  })
}
