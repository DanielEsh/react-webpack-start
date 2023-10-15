import { useMutation } from '@tanstack/react-query'
import { logout } from '../requests'

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => logout(),
    onSuccess: () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
  })
}
