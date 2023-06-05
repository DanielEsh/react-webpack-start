import { useEffect, useRef, type MutableRefObject } from 'react'
import { Portal } from '../Portal'
import { useStore } from 'effector-react'
import { $notifications, hide } from './event'
import { Toast } from './Toast'

const COMPONENT_NAME = 'ToastRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const ToastRoot = () => {
  const { state: toasts } = useStore($notifications)

  const hideTimeout = useRef<number>()

  const renderToasts = toasts.map((toast, index) => (
    <Toast
      key={index}
      index={index}
      toast={toast}
    />
  ))

  const handleAutoHide = () => {
    hide(0)
    window.clearTimeout(hideTimeout.current)
    if (toasts.length) {
      handleDelayedHide()
    }
  }

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current)
    console.timeLog('timer')
    console.timeEnd('timer')
    console.log('end')
  }

  const handleDelayedHide = () => {
    hideTimeout.current = window.setTimeout(handleAutoHide, 5_000)
  }

  useEffect(() => {
    console.log('WATCH', toasts)
    if (toasts.length) {
      console.log('start')
      console.time('timer')
      handleDelayedHide()
    }

    return cancelDelayedHide
  }, [toasts])

  return (
    <Portal container={TOAST_ROOT_ELEMENT}>
      <ol className="fixed top-[16px] right-[16px] flex min-w-[220px] flex-col gap-4">
        {renderToasts}
      </ol>
    </Portal>
  )
}

ToastRoot.displayName = COMPONENT_NAME
