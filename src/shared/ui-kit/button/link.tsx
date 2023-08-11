import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { BaseButton, BaseButtonProps } from 'shared/ui-kit/button/base-button'

export interface LinkProps extends BaseButtonProps {
  to: string
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, ...restProps }, forwardedRef) => {
    return (
      <BaseButton
        ref={forwardedRef}
        as={RouterLink}
        children={children}
        {...restProps}
      />
    )
  },
)
