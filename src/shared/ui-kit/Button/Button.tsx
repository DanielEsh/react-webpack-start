import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { classNames } from 'shared/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-lg text-sm transition-colors disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'bg-white border border-input text-gray-700 disabled:bg-slate-100 rounded-md shadow-sm ',
        ghost: 'bg-transparent border-none',
        primary: 'bg-neutral-800 border border-neutral-800 text-white',
      },
      size: {
        default: 'h-10 py-2 px-4',
        xs: 'w-4 h-4 rounded-md',
        sm: 'h-9 px-3 rounded-md',
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
  addonLeft?: ReactNode
  addonRight?: ReactNode
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, forwardedRef) => {
    const {
      className,
      variant,
      size,
      children,
      addonLeft,
      addonRight,
      ...restProps
    } = props

    const classes = classNames(buttonVariants({ variant, size, className }))

    return (
      <button
        ref={forwardedRef}
        className={classes}
        {...restProps}
      >
        {addonLeft && <span>{addonLeft}</span>}
        <span>{children}</span>
        {addonRight && <span>{addonRight}</span>}
      </button>
    )
  },
)
Button.displayName = 'Button'
