import { useEffect, useRef } from 'react'
import { Portal } from '../Portal'
import { useStore } from 'effector-react'
import { $notifications, hide } from './event'
import { Toast } from './Toast'

const COMPONENT_NAME = 'ToastRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

const autoCloseTimeout = 5000

export const ToastRoot = () => {
  const { state: toasts } = useStore($notifications)

  const hideTimeout = useRef<number>()

  const handleHide = () => {
    hide(0)
    window.clearTimeout(hideTimeout.current)
    if (toasts.length) {
      handleDelayedHide()
    }
  }

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current)
  }

  const handleDelayedHide = () => {
    hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout)
  }

  useEffect(() => {
    handleDelayedHide()
    return cancelDelayedHide
  }, [])

  const renderToasts = toasts.map((toast, index) => (
    <Toast
      index={index}
      toast={toast}
    />
  ))

  return (
    <Portal container={TOAST_ROOT_ELEMENT}>
      <ol className="fixed top-[16px] right-[16px] flex flex-col gap-4">
        {renderToasts}
      </ol>
    </Portal>
  )
}

ToastRoot.displayName = COMPONENT_NAME
