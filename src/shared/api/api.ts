import axios from 'axios'
import { getBaseUrl } from 'shared/api'

export const $api = axios.create({
  baseURL: getBaseUrl(),
})

export const getCollections = async (sort?: any) => {
  const URL = '/collections'

  if (sort) {
    // URL = `/collections?sort[0]=${sort.name}%3A${sort.type}`
  }

  const { data } = await $api.get(URL)
  return data
}

export const getCollectionById = async (id: number) => {
  return (await $api.get(`/collections/${id}`)).data
}

interface CreateForm {
  slug: string
  name: string
}

export const createCollection = async (form: CreateForm) => {
  return await $api.post(`/collections`, form)
}

export const deleteCollection = async (id: number) => {
  return (await $api.delete(`/collections/${id}`)).data
}
