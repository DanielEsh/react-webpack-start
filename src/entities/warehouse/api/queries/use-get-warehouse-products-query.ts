import { useQuery } from '@tanstack/react-query'
import { getWarehouseProducts } from 'entities/warehouse/api/requests'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}
interface Options {
  params: Values
  onSuccess?: (data?: any) => void
}

export const useGetWarehouseProductsQuery = (id: number, options: Options) => {
  return useQuery({
    queryKey: ['warehouseProducts', id, options.params],
    queryFn: () => getWarehouseProducts(id, options.params),
    onSuccess: options.onSuccess,
  })
}
