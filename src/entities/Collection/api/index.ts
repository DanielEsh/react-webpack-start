import { useQuery, useMutation } from '@tanstack/react-query'
import {
  getCollections,
  getCollectionById,
  createCollection,
  deleteCollection,
} from 'shared/api/api'

export const useGetCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: getCollections,
  })
}

export const useGetCollectionDetails = (id: number) => {
  return useQuery({
    queryKey: ['collections', id],
    queryFn: () => getCollectionById(id),
  })
}

export const useCreateCollection = () => {
  return useMutation({
    mutationFn: createCollection,
  })
}

export const useDeleteCollectionMutation = () => {
  return useMutation({
    mutationFn: deleteCollection,
  })
}
