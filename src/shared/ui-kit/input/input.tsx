import { forwardRef, InputHTMLAttributes } from 'react'
import { classNames } from 'shared/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

const COMPONENT_NAME = 'Input'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const { className, type, ...restProps } = props

    const classes = classNames(
      'border-input bg-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )

    return (
      <input
        type={type}
        className={classes}
        ref={forwardedRef}
        {...restProps}
      />
    )
  },
)

Input.displayName = COMPONENT_NAME
