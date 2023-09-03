import { Portal, PortalProps } from './Portal'

export interface OptionalPortalProps extends PortalProps {
  withinPortal?: boolean
}

export const OptionalPortal = ({
  withinPortal = true,
  children,
  ...others
}: OptionalPortalProps) => {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>
  }

  return <>{children}</>
}

OptionalPortal.displayName = 'OptionalPortal'
