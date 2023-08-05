import { useQuery, useMutation } from '@tanstack/react-query'
import {
  getCollections,
  getCollectionById,
  updateCollection,
  createCollection,
  deleteCollection,
} from './requests'
import { UpdateCollectionForm } from 'entities/collection/types'
import { setCollectionTableValues } from "entities/collection/model";

interface Values {
  page: number
  limit: number
  sort_by: string[]
  order_by: string[]
}

export const useGetCollections = (values: Values) => {
  return useQuery({
    queryKey: ['collections', values],
    queryFn: () => getCollections(values),
    keepPreviousData: true,
    onSuccess: (data) => {
      setCollectionTableValues({
        currentPage: data.meta.pagination.currentPage,
      })
    },
  })
}

export const useGetCollectionDetails = (id: number) => {
  return useQuery({
    queryKey: ['collections', id],
    queryFn: () => getCollectionById(id),
    retry: 1,
  })
}

export const useUpdateCollectionMutation = () => {
  return useMutation({
    mutationFn: ({ form, id }: { form: UpdateCollectionForm; id: number }) =>
      updateCollection(form, id),
  })
}

export const useCreateCollectionMutation = () => {
  return useMutation({
    mutationFn: createCollection,
  })
}

export const useDeleteCollectionMutation = () => {
  return useMutation({
    mutationFn: deleteCollection,
  })
}
