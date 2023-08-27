import { useQuery } from '@tanstack/react-query'
import { getAttributes } from '../requests'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetAttributes = (values: Values) => {
  return useQuery({
    queryKey: ['attributes', values],
    queryFn: () => getAttributes(values),
    keepPreviousData: true,
  })
}
