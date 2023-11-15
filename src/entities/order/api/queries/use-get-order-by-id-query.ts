import { useQuery } from '@tanstack/react-query'
import { getOrderById } from '../requests'

export const useGetOrderByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ['order', id],
    queryFn: () => getOrderById(id),
  })
}
