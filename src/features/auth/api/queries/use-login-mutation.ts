import { useMutation } from '@tanstack/react-query'
import { LoginFormSchemaType } from 'features/auth/ui/login/login-form-schema'
import { signIn } from 'features/auth/api/requests'

interface Args {
  onSuccess?(data: any): void
}

export const useLoginMutation = (args: Args) => {
  const { onSuccess } = args

  return useMutation({
    mutationFn: (form: LoginFormSchemaType) => signIn(form),
    onSuccess: (data) => {
      console.log('mutation success')
      onSuccess && onSuccess(data)
    },
  })
}
