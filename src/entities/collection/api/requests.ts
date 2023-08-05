import qs from 'qs'
import { $api } from 'shared/api/api'
import {
  Values,
  UpdateCollectionForm,
  CreateCollectionForm,
  Collection,
  ListRequest,
} from '../types'

export const createCollection = async (form: CreateCollectionForm) => {
  return (await $api.post(`/collections`, form)).data
  // console.log('CREATE', JSON.stringify(form, null, 2))
}

export const getCollections = async (values?: Values) => {
  console.log('getCollections', values)
  const BASE_URL = '/collections'
  const query = `${BASE_URL}?${qs.stringify(values)}`
  console.log('QUERY', query)
  return (await $api.get<ListRequest<Collection>>(query)).data
}

export const getCollectionById = async (id: number) => {
  return (await $api.get<Collection>(`/collections/${id}`)).data
}

export const updateCollection = async (
  form: UpdateCollectionForm,
  id: number,
) => {
  return (await $api.patch<Collection>(`/collections/${id}`, form)).data
}

export const deleteCollection = async (id: number) => {
  return (await $api.delete<Collection>(`/collections/${id}`)).data
}
