import axios from 'axios'

const BASE_API_URL = 'http://localhost:1337/api/'

export const $api = axios.create({
  baseURL: BASE_API_URL,
})

export const getTestData = async (currentPage: string, limit: string) => {
  const { data } = await $api.get(`/collections`)
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
