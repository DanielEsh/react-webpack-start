import { Portal } from '../Portal'
import { Toast } from './Toast'
import { useContext } from 'react'
import { NotificationContext } from './ToastContext'

const COMPONENT_NAME = 'ToastRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const ToastRoot = () => {
  const { notifications, hideNotification } = useContext(NotificationContext)

  const renderToasts = () =>
    notifications.map((toast, index) => (
      <Toast
        key={toast.id}
        index={index}
        toast={toast}
        autoClose={5000}
        onHide={hideNotification}
      />
    ))

  return (
    <Portal container={TOAST_ROOT_ELEMENT}>
      <ol className="fixed top-[16px] right-[16px] flex min-w-[220px] flex-col gap-4">
        {renderToasts()}
      </ol>
    </Portal>
  )
}

ToastRoot.displayName = COMPONENT_NAME
