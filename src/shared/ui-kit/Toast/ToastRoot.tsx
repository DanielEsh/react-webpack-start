import { Portal } from '../Portal'
import { useList } from 'effector-react'
import { $notifications } from './event'
import { Toast } from './Toast'

const COMPONENT_NAME = 'ToastRoot'

export const ToastRoot = () => {
  const toasts = useList($notifications, (toast, index) => (
    <Toast
      index={index}
      toast={toast}
    />
  ))

  return (
    <Portal>
      <ol className="fixed top-[16px] right-[16px] flex flex-col gap-4">
        {toasts}
      </ol>
    </Portal>
  )
}

ToastRoot.displayName = COMPONENT_NAME
