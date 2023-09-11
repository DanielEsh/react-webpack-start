import { useQuery } from '@tanstack/react-query'
import { getBrands } from '../requests'
import { BrandDto } from '../types'
import { PageableResponse } from 'shared/api/types'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetBrands = (
  values: Values,
  onSuccess?: (data: PageableResponse<BrandDto>) => void,
) => {
  return useQuery({
    queryKey: ['brands', values],
    queryFn: () => getBrands(values),
    keepPreviousData: true,
    onSuccess: (data: PageableResponse<BrandDto>) =>
      onSuccess && onSuccess(data),
  })
}
