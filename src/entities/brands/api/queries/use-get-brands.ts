import { useQuery } from '@tanstack/react-query'
import { getBrands } from '../requests'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetBrands = (values: Values) => {
  return useQuery({
    queryKey: ['brands', values],
    queryFn: () => getBrands(values),
    keepPreviousData: true,
  })
}
