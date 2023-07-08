import { memo, useCallback, useContext, useEffect, useRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { ToastType } from './types'
import { ToastCloseButton } from './ToastCloseButton'
import { $notifications, hide } from 'shared/ui-kit/Toast/event'
import { classNames } from 'shared/utils'
import { useStore } from 'effector-react'
import { NotificationContext } from './ToastContext'

const COMPONENT_NAME = 'Toast'

interface Props {
  toast: ToastType
  index: number
  onHide(id: string): void
}

export const Toast = memo((props: Props) => {
  const { toast, index, onHide } = props
  const hideTimeout = useRef<number>(5)
  const closeTimerStartTimeRef = useRef(0)

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
    hideTimeout.current = window.setTimeout(handleHide, 5_000)
  }

  // useEffect(() => {
  //   if (typeof notification.onOpen === 'function') {
  //     notification.onOpen(notification);
  //   }
  // }, []);

  useEffect(() => {
    handleDelayedHide()
    return cancelDelayedHide
  }, [notifications])

  const classes = classNames(toastVariants())

  return (
    <li className={classes}>
      <div className="grid gap-1">
        <div>{toast.title}</div>
        <div>{toast.message}</div>
      </div>
      <ToastCloseButton onClick={handleHide} />
    </li>
  )
})

Toast.displayName = COMPONENT_NAME
