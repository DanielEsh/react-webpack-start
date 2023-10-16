import axios, { AxiosRequestConfig } from 'axios'
import { getBaseUrl } from 'shared/api'
import { fillTokens } from 'widgets/layouts/app-store/model'
import { setAuthTokens } from 'features/auth/model'

export const $api = axios.create({
  baseURL: getBaseUrl(),
})

$api.interceptors.request.use(
  (config) => {
    const ACCESS_TOKEN = localStorage.getItem('accessToken')

    if (ACCESS_TOKEN && config.url !== 'auth/refresh') {
      config.headers['Authorization'] = `Bearer ${ACCESS_TOKEN}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      // originalRequest._retry = true
      try {
        const refreshToken = localStorage.getItem('refreshToken')

        if (!refreshToken) throw error

        const response = await $api.post(
          'auth/refresh',
          {},
          { headers: { Authorization: `Bearer ${refreshToken}` } },
        )

        setAuthTokens({
          accessToken: response.data.accessToken,
        })
        return $api.request(originalRequest)
      } catch (e) {
        console.log('Ошибка обновления токена или исключение')
        // Вместо повторной отправки запроса, вы можете перенаправить пользователя на страницу входа или выполнить другие действия по вашему усмотрению.
        throw error
      }
    }
    throw error
  },
)

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
