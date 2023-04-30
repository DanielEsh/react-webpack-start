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

interface CreateForm {
  slug: string
  name: string
  goodsCount: number
}

export const createCollection = async (form: CreateForm) => {
  const { data } = await $api.post(`/collections/create`, form)
  return data
}
