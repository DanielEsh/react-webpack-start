import { useContext, useEffect, useRef } from 'react'
import { cva } from 'class-variance-authority'
import { ToastType } from './types'
import { ToastCloseButton } from './ToastCloseButton'
import { classNames } from 'shared/utils'
import { NotificationContext } from './ToastContext'

const COMPONENT_NAME = 'Toast'

interface Props {
  toast: ToastType
  index: number
  autoClose: number | false
  onHide(id: string): void
}

export function getAutoClose(
  autoClose: boolean | number,
  notificationAutoClose: boolean | number,
) {
  if (typeof notificationAutoClose === 'number') {
    return notificationAutoClose
  }

  if (notificationAutoClose === false || autoClose === false) {
    return false
  }

  return autoClose
}

export const Toast = (props: Props) => {
  const { toast, onHide, autoClose } = props
  const notificationAutoClose = toast.autoClose ?? false
  const autoCloseTimeout = getAutoClose(autoClose, notificationAutoClose)
  const hideTimeout = useRef(0)

  const { notifications } = useContext(NotificationContext)

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
        type: props.toast.type || 'default',
      },
    },
  )

  const handleHide = () => {
    onHide(toast.id)
    window.clearTimeout(hideTimeout.current)
  }

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current)
  }

  const handleDelayedHide = () => {
    console.log('startTimeout', toast.id)
    console.log(autoCloseTimeout, props.autoClose)
    if (typeof autoCloseTimeout === 'number') {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout)
    }
  }

  useEffect(() => {
    handleDelayedHide()
    return cancelDelayedHide
  }, [autoClose, notificationAutoClose])

  const classes = classNames(toastVariants())

  return (
    <li className={classes}>
      <div className="grid gap-1">
        <div>{toast.title}</div>
        <div>{toast.message}</div>
        <div>TIMEOUT: {hideTimeout.current}</div>
      </div>
      <ToastCloseButton onClick={handleHide} />
    </li>
  )
}

Toast.displayName = COMPONENT_NAME
