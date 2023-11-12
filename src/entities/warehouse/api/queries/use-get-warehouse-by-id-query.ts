import { useQuery } from '@tanstack/react-query'
import { getWarehouseById } from '../requests'

export const useGetWarehouseByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => getWarehouseById(id),
  })
}
