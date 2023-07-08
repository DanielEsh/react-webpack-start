import { Portal } from '../Portal'
import { useStore } from 'effector-react'
import { $notifications } from './event'
import { Toast } from './Toast'
import { useNotificationsState } from './NotificationsState'

const COMPONENT_NAME = 'ToastRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const ToastRoot = () => {
  const { state: toasts } = useStore($notifications)

  const {
    notifications,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  } = useNotificationsState()

  const renderToasts = () =>
    notifications.map((toast, index) => (
      <Toast
        key={index}
        index={index}
        toast={toast}
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
