import axios from 'axios'

const BASE_API_URL = 'http://localhost:8000/api'

export const $api = axios.create({
  baseURL: BASE_API_URL,
})

export const getTestData = async () => {
  const { data } = await $api.get('/collection')
  return data
}
