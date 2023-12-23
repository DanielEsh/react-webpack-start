import { type ReactNode } from 'react'
import { PageLoader } from 'shared/ui/page-loader'
import { PrivateRoute } from 'app/router/ui/private-route'

interface Props {
  children: ReactNode
  isPrivate?: boolean
}

export const RouterPage = (props: Props) => {
  const { children, isPrivate = false } = props

  if (isPrivate) {
    return (
      <PrivateRoute>
        <PageLoader>{children}</PageLoader>
      </PrivateRoute>
    )
  }

  return <PageLoader>{children}</PageLoader>
}
