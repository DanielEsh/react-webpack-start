import { useQuery } from '@tanstack/react-query'
import { getCollections } from 'shared/api/api'

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
  })
}
