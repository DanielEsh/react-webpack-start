import { useQuery } from '@tanstack/react-query'
import { getBrandBySlug } from '../requests'

export const useGetBrandDetailsBySlug = (slug: string) => {
  console.log('useGetCategoryDetails')
  return useQuery({
    queryKey: ['brand', slug],
    queryFn: () => getBrandBySlug(slug),
  })
}
