import type { RouteObject } from 'react-router-dom'

type RouterConfigItem = Omit<RouteObject, 'children'> & {
  children?: Record<string, RouterConfigItem>
}

export type RouterConfig = Record<string, RouterConfigItem>
