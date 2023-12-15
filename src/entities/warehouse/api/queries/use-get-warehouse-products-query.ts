import { useQuery } from '@tanstack/react-query'
import { getWarehouseProducts } from 'entities/warehouse/api/requests'

interface Options {
  onSuccess?: (data?: any) => void
}

export const useGetWarehouseProductsQuery = (id: number, options: Options) => {
  return useQuery({
    queryKey: ['warehouseProducts', id],
    queryFn: () => getWarehouseProducts(id),
    onSuccess: options.onSuccess,
  })
}
