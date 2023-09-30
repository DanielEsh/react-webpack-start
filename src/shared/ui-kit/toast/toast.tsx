import { ReactNode } from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { classNames } from 'shared/utils'
import { ToastCloseButton } from './toast-close-button'

const COMPONENT_NAME = 'Toast'

const toastVariants = cva(
  'group relative pointer-events-auto flex w-full max-w-[280px] items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all',
  {
    variants: {
      type: {
        default: 'bg-white border',
        success: 'bg-green-500 border-green-500',
        error: 'bg-red-500 border-red-500',
        warning: 'bg-yellow-500 border-yellow-500',
        destructive:
          'group destructive border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

type ToastVariantProps = VariantProps<typeof toastVariants>

export interface ToastProps extends Required<Pick<ToastVariantProps, 'type'>> {
  title: ReactNode
  message: ReactNode
  onClose: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const Toast = (props: ToastProps) => {
  const { type, title, message, onClose, ...restProps } = props

  const classes = classNames(toastVariants({ type }))

  return (
    <li
      className={classes}
      {...restProps}
    >
      <div className="grid gap-1">
        <div>{title}</div>
        <div>{message}</div>
      </div>
      <ToastCloseButton onClick={onClose} />
    </li>
  )
}

Toast.displayName = COMPONENT_NAME
