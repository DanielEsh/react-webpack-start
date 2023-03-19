import { ReactElement, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const DEFAULT_APP_INSTANCE_ID = 'portal'

const portalElement = document.getElementById(DEFAULT_APP_INSTANCE_ID)

export interface PortalProps {
  children: ReactElement
  container?: HTMLElement
}

export const Portal = (props: PortalProps) => {
  const { children, container } = props
  const [node, setNode] = useState<HTMLElement | null>(portalElement)

  useEffect(() => {
    if (container) setNode(container)
  }, [container])

  return node ? createPortal(children, node) : null
}
