import axios from 'axios'

const BASE_API_URL = 'http://localhost:8000/api'

export const $api = axios.create({
  baseURL: BASE_API_URL,
})

export const getTestData = async (currentPage: string, limit: string) => {
  const { data } = await $api.get(
    `/collection?page=${currentPage}&limit=${limit}`,
  )
  return data
}
