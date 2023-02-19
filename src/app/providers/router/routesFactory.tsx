import { RouteProps } from 'react-router-dom'

import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import { MainPage } from 'pages/MainPage/MainPage'
import { NotFoundPage } from 'pages/NotFound'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: 'about',
  // should be last
  [Routes.NOT_FOUND]: '*',
}

export const routesConfig: Record<Routes, RouteProps> = {
  [Routes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [Routes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
  [Routes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
}
