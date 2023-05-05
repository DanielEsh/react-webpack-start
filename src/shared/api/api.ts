import axios from 'axios'
import { getBaseUrl } from 'shared/api'
import qs from 'qs'

import { UpdateCollectionForm } from 'entities/Collection/types'

export const $api = axios.create({
  baseURL: getBaseUrl(),
})

interface Values {
  page: number
  limit: number
  sort_by: string[]
  order_by: string[]
}

export const getCollections = async (values?: Values) => {
  console.log('getCollections', values)
  const BASE_URL = '/collections'
  const query = `${BASE_URL}?${qs.stringify(values)}`
  console.log('QUERY', query)
  return (await $api.get(query)).data
}

export const getCollectionById = async (id: number) => {
  return (await $api.get(`/collections/${id}`)).data
}

interface CreateForm {
  slug: string
  name: string
}

export const updateCollection = async (
  form: UpdateCollectionForm,
  id: number,
) => {
  return (await $api.patch(`/collections/${id}`, form)).data
}

export const createCollection = async (form: CreateForm) => {
  return (await $api.post(`/collections`, form)).data
}

export const deleteCollection = async (id: number) => {
  return (await $api.delete(`/collections/${id}`)).data
}
