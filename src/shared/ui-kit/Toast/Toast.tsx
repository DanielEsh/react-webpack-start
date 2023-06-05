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
        variant: {
          default: 'bg-white border',
          destructive:
            'group destructive border-destructive bg-destructive text-destructive-foreground',
        },
      },
      defaultVariants: {
        variant: 'default',
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
      <div className="absolute -left-4 bottom-0 h-4 w-full bg-blue-500"></div>
    </li>
  )
}

Toast.displayName = COMPONENT_NAME
