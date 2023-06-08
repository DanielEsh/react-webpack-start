import { memo, useCallback, useEffect, useRef } from 'react'
import { VariantProps, cva } from 'class-variance-authority'
import { ToastType } from './types'
import { ToastCloseButton } from './ToastCloseButton'
import { $notifications, hide } from 'shared/ui-kit/Toast/event'
import { classNames } from 'shared/utils'
import { useStore } from 'effector-react'

const COMPONENT_NAME = 'Toast'

interface Props {
  toast: ToastType
  index: number
}

export const Toast = memo((props: Props) => {
  const {
    toast: { message, title },
    index,
  } = props
  const hideTimeout = useRef<number>(5)
  const closeTimerStartTimeRef = useRef(0)

  const { state: toasts } = useStore($notifications)

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
    hide(index)
    window.clearTimeout(hideTimeout.current)
  }

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current)
  }

  const startTimer = useCallback(() => {
    closeTimerStartTimeRef.current = new Date().getTime()
    hideTimeout.current = window.setTimeout(handleHide, 5_000)
  }, [hideTimeout.current])

  const classes = classNames(toastVariants())

  useEffect(() => {
    startTimer()

    return cancelDelayedHide
  }, [toasts])

  return (
    <li className={classes}>
      <div className="grid gap-1">
        <div>{title}</div>
        <div>{message}</div>
      </div>
      <ToastCloseButton onClick={handleHide} />
    </li>
  )
})

Toast.displayName = COMPONENT_NAME
