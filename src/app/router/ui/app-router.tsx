import {
  createBrowserRouter,
  type RouteObject,
  RouterProvider,
} from 'react-router-dom'
import { routerConfig, RouterConfig } from '../config'

function transformChildren(obj: any) {
  if (obj.children) {
    obj.children = Object.values(obj.children).map(transformChildren)
  }

  return obj
}

function createRouter(routerConfig: RouterConfig) {
  const routeObject = Object.values(routerConfig).map(transformChildren)

  return createBrowserRouter(
    routeObject.map((item): RouteObject => {
      if (item.index) {
        return {
          index: true,
          path: item.path,
          element: item.element,
          children: undefined,
        }
      }

      return {
        path: item.path,
        index: false,
        element: item.element,
        children: item.children,
      }
    }),
  )
}

const router = createRouter(routerConfig)

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
