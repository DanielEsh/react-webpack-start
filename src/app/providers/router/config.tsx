import { RouteProps } from 'react-router-dom'
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import { MainPage } from 'pages/MainPage/MainPage'
import CollectionsPage from 'pages/CollectionsPage/CollectionsPage'
import CollectionPage from 'pages/CollectionPage/CollectionPage'
// import { NotFoundPage } from 'pages/NotFound'
import RootLayout from 'widgets/layouts/RootLayout'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  HOME = 'home',
  ABOUT = 'about',
  COLLECTIONS = 'collections',
  COLLECTION = 'collection',
  // should be last
  // NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.COLLECTIONS]: '/collections',
  [AppRoutes.COLLECTION]: '/collections/', // + :id
  // should be last
  // [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <RootLayout />,
  },
  [AppRoutes.HOME]: {
    index: true,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
    authOnly: true,
  },
  [AppRoutes.COLLECTIONS]: {
    path: RoutePath.collections,
    element: <CollectionsPage />,
    authOnly: true,
  },
  [AppRoutes.COLLECTION]: {
    path: `${RoutePath.collection}:id`,
    element: <CollectionPage />,
    authOnly: true,
  },
  // should be last
  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath.not_found,
  //   element: <NotFoundPage />,
  // },
}
