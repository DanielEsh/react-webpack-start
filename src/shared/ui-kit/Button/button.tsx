import { forwardRef } from 'react'
import { BaseButton, BaseButtonProps } from 'shared/ui-kit/Button/base-button'

export const Button = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ children, ...restProps }, forwardedRef) => {
    return (
      <BaseButton
        ref={forwardedRef}
        children={children}
        {...restProps}
      />
    )
  },
)
