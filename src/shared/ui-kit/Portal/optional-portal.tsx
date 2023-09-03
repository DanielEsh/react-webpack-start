import { Portal, PortalProps } from './Portal'

export interface OptionalPortalProps extends PortalProps {
  withinPortal?: boolean
}

export const OptionalPortal = ({
  withinPortal = true,
  children,
  ...others
}: OptionalPortalProps) => {
  if (!withinPortal) <>{children}</>

  return <Portal {...others}>{children}</Portal>
}

OptionalPortal.displayName = 'OptionalPortal'
