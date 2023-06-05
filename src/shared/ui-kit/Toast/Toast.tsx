import { VariantProps, cva } from 'class-variance-authority'
import { ToastType } from './types'
import { ToastCloseButton } from './ToastCloseButton'
import { hide } from 'shared/ui-kit/Toast/event'
import { classNames } from 'shared/utils'

const COMPONENT_NAME = 'Toast'

interface Props {
  toast: ToastType
  index: number
}

export const Toast = (props: Props) => {
  const {
    toast: { message, title },
    index,
  } = props

  const toastVariants = cva(
    'group relative pointer-events-auto flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg transition-all',
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
        type: props.toast.type || 'default',
      },
    },
  )

  const handleHide = () => {
    hide(index)
  }

  const classes = classNames(toastVariants())

  return (
    <li className={classes}>
      <div className="grid gap-1">
        <div>{title}</div>
        <div>{message}</div>
      </div>
      <ToastCloseButton onClick={handleHide} />
    </li>
  )
}

Toast.displayName = COMPONENT_NAME
