import axios from 'axios'
import { getBaseUrl } from 'shared/api'

export const $api = axios.create({
  baseURL: getBaseUrl(),
})
