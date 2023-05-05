import axios from 'axios'
import { getBaseUrl } from 'shared/api'
import qs from 'qs'

import { UpdateCollectionForm } from 'entities/Collection/types'

export const $api = axios.create({
  baseURL: getBaseUrl(),
})

interface Values {
  currentPage: number
  limit: number
  sort_by: string[]
  group_by: string[]
}

export const getCollections = async (values?: Values) => {
  const BASE_URL = '/collections'
  const { data } = await $api.get(`${BASE_URL}`)
  return data
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
