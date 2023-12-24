import { useQuery } from '@tanstack/react-query'
import { getBrands } from '../requests'
import { BrandDto } from '../types'
import { PageableResponse, PageableResponseParams } from 'shared/api/types'

export const useGetBrandsQuery = (
  values: PageableResponseParams,
  onSuccess?: (data: PageableResponse<BrandDto>) => void,
) => {
  return useQuery({
    queryKey: ['brands', values],
    queryFn: () => getBrands(values),
    keepPreviousData: true,
    onSuccess: onSuccess,
  })
}
