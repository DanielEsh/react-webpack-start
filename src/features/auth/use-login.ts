import { useNavigate } from 'react-router-dom'
import { changeAuthStatus, setAuthTokens } from 'features/auth/model'
import { useLoginMutation } from './api/queries/use-login-mutation'

interface LoginParams {
  username: string
  password: string
}
export function useLogin() {
  const navigate = useNavigate()
  const handleSuccessLogin = (response: any) => {
    setAuthTokens({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
    })
    changeAuthStatus(true)

    navigate('/')
  }

  const { mutateAsync: loginMutation } = useLoginMutation({
    onSuccess: handleSuccessLogin,
  })

  return async ({ username, password }: LoginParams) => {
    await loginMutation({ username, password })
  }
}
