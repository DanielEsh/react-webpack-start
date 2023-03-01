import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from '../config'

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = false
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />
  }

  return children
}
