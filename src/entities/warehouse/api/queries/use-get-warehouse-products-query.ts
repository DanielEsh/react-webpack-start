import { useQuery } from '@tanstack/react-query'
import { getWarehouseProducts } from 'entities/warehouse/api/requests'

export const useGetWarehouseProductsQuery = (id: number) => {
  return useQuery({
    queryKey: ['warehouseProducts', id],
    queryFn: () => getWarehouseProducts(id),
  })
}
