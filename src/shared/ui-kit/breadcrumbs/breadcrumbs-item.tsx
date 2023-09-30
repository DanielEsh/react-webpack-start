import { ReactNode, useContext } from 'react'
import {
  BreadcrumbsContext,
  type BreadcrumbsContextType,
} from './ breadcrumbs-context'
import { classNames } from 'shared/utils'
import { Link } from 'react-router-dom'

interface BreadcrumbsItemPropsType {
  children: ReactNode
  isLast?: boolean
  to?: string
}

export const BreadcrumbsItem = (props: BreadcrumbsItemPropsType) => {
  const { children, isLast, to } = props

  const { separator } = useContext<BreadcrumbsContextType>(BreadcrumbsContext)

  const Component = isLast ? 'span' : Link

  const classes = classNames('text-sm text-gray-500 hover:text-blue-600', {
    'text-black hover:text-black': isLast,
  })

  return (
    <li className="inline-flex items-center">
      <Component
        className={classes}
        to={to ?? ''}
      >
        {children}
      </Component>

      {!isLast && <span className="text-gray-800">{separator}</span>}
    </li>
  )
}
