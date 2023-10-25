import { useQuery } from '@tanstack/react-query'
import { PageableResponse } from 'shared/api'
import { getWarehouses } from '../requests'
import { WarehouseDto } from 'entities/warehouse/api/dto'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetWarehouses = (
  values: Values,
  onSuccess?: (data: PageableResponse<WarehouseDto>) => void,
) => {
  return useQuery({
    queryKey: ['warehouses', values],
    queryFn: () => getWarehouses(values),
    keepPreviousData: true,
    onSuccess,
  })
}
