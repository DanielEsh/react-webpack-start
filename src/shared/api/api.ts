import axios from 'axios'

const BASE_API_URL = 'http://localhost:1337/api/'

export const $api = axios.create({
  baseURL: BASE_API_URL,
})

export const getTestData = async (sort?: any) => {
  let URL = '/collections'

  if (sort) {
    URL = `/collections?sort[0]=${sort.name}%3A${sort.type}`
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
