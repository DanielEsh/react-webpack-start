import { useMutation } from '@tanstack/react-query'
import { logout as logoutRequest } from '../requests'
import { logout } from 'features/auth/model'

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: () => logoutRequest(),
    onSuccess: () => logout(),
  })
}
