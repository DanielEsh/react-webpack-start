import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { BaseButton, BaseButtonProps } from 'shared/ui-kit/button/base-button'

export interface LinkProps extends BaseButtonProps {
  to: string
}

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = 'ghost', ...restProps }, forwardedRef) => {
    return (
      <BaseButton
        ref={forwardedRef}
        as={RouterLink}
        children={children}
        variant={variant}
        {...restProps}
      />
    )
  },
)
