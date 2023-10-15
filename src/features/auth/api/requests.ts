import { $api } from 'shared/api/api'
import { LoginDto } from 'features/auth/api/dto/login-dto'

export const signIn = async (dto: LoginDto) => {
  return (await $api.post(`/auth/signIn`, dto)).data
}

export const logout = async () => {
  return (await $api.post('/auth/logout')).data
}
