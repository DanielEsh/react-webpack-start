import { RouteProps } from 'react-router-dom'

import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import { MainPage } from 'pages/MainPage/MainPage'

export enum Routes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<Routes, string> = {
  [Routes.MAIN]: '/',
  [Routes.ABOUT]: 'about',
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
}
