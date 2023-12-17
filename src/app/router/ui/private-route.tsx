import { PropsWithChildren } from 'react'
import { useStore } from 'effector-react'
import { $authStore } from 'features/auth/model'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { isSuccessAuth } = useStore($authStore)

  return isSuccessAuth ? <>{children}</> : <Navigate to="/login" />
}
