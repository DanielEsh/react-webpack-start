import { Route } from 'react-router-dom'
import { AppRouterPaths } from 'pages/types'
import { RouterPage } from 'app/router/ui/router-page'
import RootLayout from 'widgets/layouts/root-layout'
import { lazy } from 'react'

const HomePage = lazy(() => import('pages/home-page'))
const ProfilePage = lazy(() => import('pages/profile'))
import { attributesRoutes } from './router-root-attributes'
import { brandsRoutes } from 'app/router/ui/router-layouts/router-root-layout/router-root-brands'

export const RouterRootLayout = () => {
  return (
    <Route
      path={AppRouterPaths.home}
      element={
        <RouterPage isPrivate>
          <RootLayout />
        </RouterPage>
      }
    >
      <Route
        index
        element={
          <RouterPage isPrivate>
            <HomePage />
          </RouterPage>
        }
      />
      <Route
        path={'profile'}
        element={
          <RouterPage isPrivate>
            <ProfilePage />
          </RouterPage>
        }
      />
      {...attributesRoutes}
      {...brandsRoutes}
    </Route>
  )
}
