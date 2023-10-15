import { useMutation } from '@tanstack/react-query'
import { LoginFormSchemaType } from 'features/auth/ui/login/login-form-schema'
import { signIn } from 'features/auth/api/requests'

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (form: LoginFormSchemaType) => signIn(form),
    onSuccess: (data) => {
      console.log('SUCCESS', data)
    },
  })
}
