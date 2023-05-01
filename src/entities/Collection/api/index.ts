import { useQuery, useMutation } from '@tanstack/react-query'
import {
  getCollections,
  getCollectionById,
  updateCollection,
  createCollection,
  deleteCollection,
} from 'shared/api/api'
import { UpdateCollectionForm } from 'entities/Collection/types'

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

export const useUpdateCollectionMutation = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: UpdateCollectionForm; id: number }) =>
      updateCollection(form, id),
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
