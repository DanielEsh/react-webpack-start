import { $api } from 'shared/api/api'

export const getUserInfo = async () => {
  return (await $api.get(`/staff/me`)).data
}
