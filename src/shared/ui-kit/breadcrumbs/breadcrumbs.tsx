import { ReactNode } from 'react'
import {
  BreadcrumbsContext,
  type BreadcrumbsContextType,
} from './ breadcrumbs-context'
import { BreadcrumbsItem } from './breadcrumbs-item'
import IconChevronRight from 'shared/assets/icons/chevron-right.svg'

export interface BreadcrumbsRootPropsType {
  children: ReactNode
  separator?: ReactNode
}

const COMPONENT_NAME = 'Breadcrumbs'

const DefaultSeparator = () => <IconChevronRight />

const BreadcrumbsRoot = (props: BreadcrumbsRootPropsType) => {
  const { children, separator } = props

  const context: BreadcrumbsContextType = {
    separator: separator ?? DefaultSeparator(),
  }

  return (
    <BreadcrumbsContext.Provider value={context}>
      <nav
        className="flex"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1">{children}</ol>
      </nav>
    </BreadcrumbsContext.Provider>
  )
}

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
})

BreadcrumbsRoot.displayName = COMPONENT_NAME
