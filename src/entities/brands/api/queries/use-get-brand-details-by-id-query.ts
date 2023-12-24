import { useQuery } from '@tanstack/react-query'
import { getBrandById } from '../requests'

export const useGetBrandDetailsByIdQuery = (id: number) => {
  return useQuery({
    queryKey: ['brand', id],
    queryFn: () => getBrandById(id),
  })
}
