import axios, { AxiosRequestConfig } from 'axios'
import { getBaseUrl } from 'shared/api'

export const $api = axios.create({
  baseURL: getBaseUrl(),
})

export const defaultsHeaders = {}
export const defaultParams = (params?: any): AxiosRequestConfig => ({
  headers: defaultsHeaders,
  ...params,
})

export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(url, defaultParams(params)),
  post: <T>(url: string, data: any) =>
    axios.post<T>(url, data, defaultParams()),
  patch: <T>(url: string, data: any) =>
    axios.patch<T>(url, data, defaultParams()),
  delete: <T>(url: string) => axios.delete<T>(url, defaultParams()),
}
