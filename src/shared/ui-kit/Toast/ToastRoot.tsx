import { Portal } from '../Portal'
import { useStore } from 'effector-react'
import { $notifications } from './event'
import { Toast } from './Toast'

const COMPONENT_NAME = 'ToastRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const ToastRoot = () => {
  const { state: toasts } = useStore($notifications)

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
