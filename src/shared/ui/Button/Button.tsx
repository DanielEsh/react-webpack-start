import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { Ripple } from 'shared/ui/Ripple'

import { classNames } from 'shared/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-white border border-slate-300 text-gray-700',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const { className, variant, size, children, ...restProps } = props

    const classes = classNames(buttonVariants({ variant, size, className }))

    return (
      <Ripple.Container
        as="button"
        ref={forwardedRef}
        className={classes}
        {...restProps}
      >
        {children}
        <Ripple />
      </Ripple.Container>
    )
  },
)
Button.displayName = 'Button'
