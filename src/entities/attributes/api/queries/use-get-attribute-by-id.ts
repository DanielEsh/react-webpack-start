import { useQuery } from '@tanstack/react-query'
import { getAttributeById } from '../requests'

export const useGetAttributeById = (id: number) => {
  return useQuery({
    queryKey: ['attribute', id],
    queryFn: () => getAttributeById(id),
  })
}
