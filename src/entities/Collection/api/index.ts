import { useQuery, useMutation } from '@tanstack/react-query'
import { getCollections, createCollection } from 'shared/api/api'

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
  })
}

export const useCreateCollection = () => {
  return useMutation({
    mutationFn: createCollection,
  })
}
