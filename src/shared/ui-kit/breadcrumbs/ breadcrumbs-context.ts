import { createContext, ReactNode } from 'react'

export type BreadcrumbsContextType = {
  separator?: ReactNode
}

const COMPONENT_NAME = 'BreadcrumbsContext'

export const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
  separator: 'DEFAULT SEPARATOR',
})

BreadcrumbsContext.displayName = COMPONENT_NAME
